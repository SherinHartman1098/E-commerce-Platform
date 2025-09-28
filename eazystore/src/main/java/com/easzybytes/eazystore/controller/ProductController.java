package com.easzybytes.eazystore.controller;

import com.easzybytes.eazystore.dto.ProductDto;
import com.easzybytes.eazystore.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private  final IProductService iProductService;
    @GetMapping
    public List<ProductDto> getProducts(){
       List<ProductDto> productList= iProductService.getProducts();
        return productList;
    }
}
