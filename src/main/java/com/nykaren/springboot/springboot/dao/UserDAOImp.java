package com.nykaren.springboot.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.nykaren.springboot.springboot.modal.User;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImp implements UserDAO {

	@Autowired
	private EntityManager entityManager;

    @Override
    public List<User> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<User> query = currSession.createQuery("from User", User.class);
		List<User> list = query.getResultList();
		return list;
    }

    @Override
    public User get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		User user = currSession.get(User.class, id);
		return user;
    }

    @Override
    public void save(User user) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(user);
    }

    @Override
    public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		User user = currSession.get(User.class, id);
		currSession.delete(user);        
    }
    
}
