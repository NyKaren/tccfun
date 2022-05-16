package com.nykaren.springboot.springboot.controller;

import java.util.List;

import com.nykaren.springboot.springboot.modal.UserRole;
import com.nykaren.springboot.springboot.service.UserRoleService;

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
public class UserRoleController {
	
	@Autowired
	private UserRoleService userRoleService;
	
	@GetMapping("/userRole")
	public List<UserRole> get() {
		return userRoleService.get();
	}
	
	@PostMapping("/userRole")
	public UserRole save(@RequestBody UserRole userRole) {
		userRoleService.save(userRole);
		return userRole;
	}
	
	@GetMapping("/userRole/{id}")
	public UserRole get(@PathVariable int id) {
		return userRoleService.get(id);
	}
	
	@DeleteMapping("/userRole/{id}")
	public String delete(@PathVariable int id) {
		
		userRoleService.delete(id);
		
		return "UserRole removed with id "+id;
		
	}
	
	@PutMapping("/userRole")
	public UserRole update(@RequestBody UserRole userRole) {
		userRoleService.save(userRole);
		return userRole;
	}
    
}
