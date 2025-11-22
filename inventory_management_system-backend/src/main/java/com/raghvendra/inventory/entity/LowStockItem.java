package com.raghvendra.inventory.entity;

import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LowStockItem {

    @Transient
    private Long id;

    @Transient
    private String name;

    @Transient
    private int quantityInStock;

    @Transient
    private int reorderLevel;
}

