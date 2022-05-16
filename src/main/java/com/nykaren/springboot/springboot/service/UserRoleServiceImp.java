package com.nykaren.springboot.springboot.service;

import java.util.List;

import com.nykaren.springboot.springboot.dao.UserRoleDAO;
import com.nykaren.springboot.springboot.modal.UserRole;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserRoleServiceImp implements UserRoleService {
	
	@Autowired
	private UserRoleDAO userRoleDao;

	@Transactional
    @Override
    public List<UserRole> get() {
        return userRoleDao.get();
    }

    @Transactional
    @Override
    public UserRole get(int id) {
		return userRoleDao.get(id);
    }

    @Transactional
    @Override
    public void save(UserRole userRole) {
        userRoleDao.save(userRole);        
        
    }

    @Transactional
    @Override
    public void delete(int id) {
        userRoleDao.delete(id);
        
    }
    
}
