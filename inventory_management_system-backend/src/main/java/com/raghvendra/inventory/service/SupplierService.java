package com.raghvendra.inventory.service;

import com.raghvendra.inventory.entity.Supplier;
import com.raghvendra.inventory.exception.ResourceNotFoundException;
import com.raghvendra.inventory.repository.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupplierService {

    private final SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Supplier getSupplierById(Long id) {
        return supplierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found with id: " + id));
    }

    public Supplier createSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(Long id, Supplier updatedSupplier) {
        Supplier supplier = getSupplierById(id);
        supplier.setCompanyName(updatedSupplier.getCompanyName());
        supplier.setContactPerson(updatedSupplier.getContactPerson());
        supplier.setEmail(updatedSupplier.getEmail());
        supplier.setPhone(updatedSupplier.getPhone());
        supplier.setAddress(updatedSupplier.getAddress());
        return supplierRepository.save(supplier);
    }

    public void deleteSupplier(Long id) {
        Supplier supplier = getSupplierById(id);
        supplierRepository.delete(supplier);
    }
}
