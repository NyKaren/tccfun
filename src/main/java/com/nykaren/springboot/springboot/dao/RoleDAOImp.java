package com.nykaren.springboot.springboot.dao;


import java.util.List;

import javax.persistence.EntityManager;

import com.nykaren.springboot.springboot.modal.Role;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RoleDAOImp implements RoleDAO {

	@Autowired
	private EntityManager entityManager;

    @Override
    public List<Role> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Role> query = currSession.createQuery("from Role", Role.class);
		List<Role> list = query.getResultList();
        return list;
    }

    @Override
    public Role get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Role role = currSession.get(Role.class, id);
        return role;
    }

    @Override
    public void save(Role role) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(role);
        
    }

    @Override
    public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Role role = currSession.get(Role.class, id);
		currSession.delete(role);        
        
    }
    
}
