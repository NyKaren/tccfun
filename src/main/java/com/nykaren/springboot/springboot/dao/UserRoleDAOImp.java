package com.nykaren.springboot.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.nykaren.springboot.springboot.modal.UserRole;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRoleDAOImp implements UserRoleDAO {

	@Autowired
	private EntityManager entityManager;

    @Override
    public List<UserRole> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<UserRole> query = currSession.createQuery("from UserRole", UserRole.class);
		List<UserRole> list = query.getResultList();
        return list;
    }

    @Override
    public UserRole get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		UserRole userRole = currSession.get(UserRole.class, id);
        return userRole;
    }

    @Override
    public void save(UserRole userRole) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(userRole);
        
    }

    @Override
    public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		UserRole userRole = currSession.get(UserRole.class, id);
		currSession.delete(userRole);    
        
    }
    
}
