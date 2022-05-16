package com.nykaren.springboot.springboot;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootApplication {
     
	@PostConstruct
	void started() {
	  TimeZone.setDefault(TimeZone.getTimeZone("America/Bahia"));
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}

}
