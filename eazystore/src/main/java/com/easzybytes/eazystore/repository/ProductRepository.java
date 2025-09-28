package com.easzybytes.eazystore.repository;

import com.easzybytes.eazystore.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}