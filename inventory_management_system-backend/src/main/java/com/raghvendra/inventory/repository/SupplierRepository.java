package com.raghvendra.inventory.repository;

import com.raghvendra.inventory.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    boolean existsByCompanyName(String companyName);
}
