package com.raghvendra.inventory.service;

import com.raghvendra.inventory.entity.*;
import com.raghvendra.inventory.exception.ResourceNotFoundException;
import com.raghvendra.inventory.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final ProductService productService;

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Transactional
    public Transaction createTransaction(Transaction transaction) {
        if (transaction.getTransactionType() == TransactionType.STOCK_IN) {
            productService.adjustStock(transaction.getProduct().getId(), transaction.getQuantity());
        } else if (transaction.getTransactionType() == TransactionType.STOCK_OUT) {
            productService.adjustStock(transaction.getProduct().getId(), -transaction.getQuantity());
        }
        return transactionRepository.save(transaction);
    }

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Transaction not found with id: " + id));
    }
}
