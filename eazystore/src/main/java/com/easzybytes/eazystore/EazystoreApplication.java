package com.easzybytes.eazystore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan(basePackages = {"com.easzybytes.eazystore.controller"})
public class EazystoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(EazystoreApplication.class, args);
	}

}
