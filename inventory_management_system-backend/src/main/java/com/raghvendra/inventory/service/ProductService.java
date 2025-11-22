package com.raghvendra.inventory.service;

import com.raghvendra.inventory.entity.Product;
import com.raghvendra.inventory.exception.ResourceNotFoundException;
import com.raghvendra.inventory.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Product existing = getProductById(id);
        existing.setSku(updatedProduct.getSku());
        existing.setName(updatedProduct.getName());
        existing.setCategory(updatedProduct.getCategory());
        existing.setSupplier(updatedProduct.getSupplier());
        existing.setUnitPrice(updatedProduct.getUnitPrice());
        existing.setQuantityInStock(updatedProduct.getQuantityInStock());
        existing.setReorderLevel(updatedProduct.getReorderLevel());
        existing.setReorderQuantity(updatedProduct.getReorderQuantity());
        existing.setDescription(updatedProduct.getDescription());
        return productRepository.save(existing);
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }

    public void adjustStock(Long productId, int quantityChange) {
        Product product = getProductById(productId);
        int newQty = product.getQuantityInStock() + quantityChange;
        if (newQty < 0) throw new IllegalArgumentException("Insufficient stock for product: " + product.getName());
        product.setQuantityInStock(newQty);
        productRepository.save(product);
    }

    public BigDecimal calculateTotalInventoryValue() {
        return productRepository.findAll().stream()
                .map(p -> p.getUnitPrice().multiply(BigDecimal.valueOf(p.getQuantityInStock())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public long getTotalProducts() {
        return productRepository.count();
    }

    public int getTotalQuantity() {
        return productRepository.findAll().stream()
                .mapToInt(Product::getQuantityInStock)
                .sum();
    }

    public List<Product> getLowStockItems() {
        return productRepository.findAll().stream()
                .filter(p -> p.getReorderLevel() != null && p.getQuantityInStock() <= p.getReorderLevel())
                .toList();
    }
}
