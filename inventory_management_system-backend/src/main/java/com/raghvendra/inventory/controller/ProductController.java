package com.raghvendra.inventory.controller;

import com.raghvendra.inventory.entity.Product;
import com.raghvendra.inventory.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // 🔹 Fetch all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // 🔹 Fetch low stock products
    @GetMapping("/low-stock")
    public List<Product> getLowStockProducts() {
        return productRepository.findAll()
                .stream()
                .filter(p -> p.getQuantityInStock() <= p.getReorderLevel())
                .collect(Collectors.toList());
    }

    // 🔹 Add a new product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // 🔹 Update a product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return productRepository.findById(id)
                .map(p -> {
                    p.setSku(updatedProduct.getSku());
                    p.setName(updatedProduct.getName());
                    p.setQuantityInStock(updatedProduct.getQuantityInStock());
                    p.setUnitPrice(updatedProduct.getUnitPrice());
                    p.setReorderLevel(updatedProduct.getReorderLevel());
                    return productRepository.save(p);
                })
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // 🔹 Delete a product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
