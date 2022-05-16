package com.nykaren.springboot.springboot.controller;

import java.util.List;

import com.nykaren.springboot.springboot.modal.User;
import com.nykaren.springboot.springboot.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/user")
	public List<User> get() {
		return userService.get();
	}
	
	@PostMapping("/user")
	public User save(@RequestBody User user) {
		userService.save(user);
		return user;
	}
	
	@GetMapping("/user/{id}")
	public User get(@PathVariable int id) {
		return userService.get(id);
	}
	
	@DeleteMapping("/user/{id}")
	public String delete(@PathVariable int id) {
		
		userService.delete(id);
		
		return "User removed with id "+id;
		
	}
	
	@PutMapping("/user")
	public User update(@RequestBody User user) {
		userService.save(user);
		return user;
	}
    
}
