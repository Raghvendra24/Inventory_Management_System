package com.raghvendra.inventory.repository;

import com.raghvendra.inventory.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {}
