package com.easzybytes.eazystore.service;

import com.easzybytes.eazystore.dto.ProductDto;

import java.util.List;

public interface IProductService {
    List<ProductDto> getProducts();
}
