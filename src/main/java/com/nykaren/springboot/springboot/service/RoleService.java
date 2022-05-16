package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.modal.Role;

public interface RoleService {
	
	List<Role> get();
	
	Role get(int id);
	
	void save(Role role);
	
	void delete(int id);
    
}
