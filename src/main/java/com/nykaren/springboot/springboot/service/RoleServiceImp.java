package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.dao.RoleDAO;
import com.nykaren.springboot.springboot.modal.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImp implements RoleService {
	
	@Autowired
	private RoleDAO roleDao;

	@Transactional
    @Override
    public List<Role> get() {
        return roleDao.get();
    }

    @Transactional
    @Override
    public Role get(int id) {
		return roleDao.get(id);
    }

    @Transactional
    @Override
    public void save(Role role) {
        roleDao.save(role);        
        
    }

    @Transactional
    @Override
    public void delete(int id) {
        roleDao.delete(id);
        
    }
    
}
