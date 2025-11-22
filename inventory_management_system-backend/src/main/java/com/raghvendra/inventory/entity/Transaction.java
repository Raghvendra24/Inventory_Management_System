package com.raghvendra.inventory.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionType transactionType;

    @Min(1)
    @Column(nullable = false)
    private Integer quantity;

    private String referenceNumber;
    private String notes;

    private LocalDateTime date;

    @PrePersist
    public void prePersist() {
        date = LocalDateTime.now();
    }
}
