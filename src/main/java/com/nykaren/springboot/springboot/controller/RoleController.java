package com.nykaren.springboot.springboot.controller;


import java.util.List;

import com.nykaren.springboot.springboot.modal.Role;
import com.nykaren.springboot.springboot.service.RoleService;

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
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	@GetMapping("/role")
	public List<Role> get() {
		return roleService.get();
	}
	
	@PostMapping("/role")
	public Role save(@RequestBody Role role) {
		roleService.save(role);
		return role;
	}
	
	@GetMapping("/role/{id}")
	public Role get(@PathVariable int id) {
		return roleService.get(id);
	}
	
	@DeleteMapping("/role/{id}")
	public String delete(@PathVariable int id) {
		
		roleService.delete(id);
		
		return "Role removed with id "+id;
		
	}
	
	@PutMapping("/role")
	public Role update(@RequestBody Role role) {
		roleService.save(role);
		return role;
	}
    
}
