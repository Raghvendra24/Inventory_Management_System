//package com.raghvendra.inventory.entity;
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.*;
//import lombok.*;
//
//import java.math.BigDecimal;
//
//@Entity
//@Table(name = "products")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//public class Product {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @NotBlank(message = "SKU is required")
//    @Column(nullable = false, unique = true)
//    private String sku;
//
//    @NotBlank(message = "Product name is required")
//    private String name;
//
//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    private Category category;
//
//    @ManyToOne
//    @JoinColumn(name = "supplier_id")
//    private Supplier supplier;
//
//    @DecimalMin(value = "0.0", inclusive = true)
//    private BigDecimal unitPrice;
//
//    @Min(0)
//    private Integer quantityInStock;
//
//    private Integer reorderLevel;
//    private Integer reorderQuantity;
//    private String description;
//}
package com.raghvendra.inventory.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false, unique = true)
    private String sku;

    @NotBlank
    @Column(nullable = false)
    private String name;

    // Category Relationship
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    // Supplier Relationship
    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @DecimalMin("0.0")
    @Column(nullable = false)
    private BigDecimal unitPrice;

    @Min(0)
    @Column(nullable = false)
    private Integer quantityInStock;

    @Min(0)
    @Column(nullable = false)
    private Integer reorderLevel;

    @Min(0)
    private Integer reorderQuantity;

    private String description;
}

