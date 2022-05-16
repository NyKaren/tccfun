package com.nykaren.springboot.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.nykaren.springboot.springboot.modal.Activity;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ActivityDAOImp implements ActivityDAO {

	@Autowired
	private EntityManager entityManager;

    @Override
    public List<Activity> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Activity> query = currSession.createQuery("from Activity", Activity.class);
		List<Activity> list = query.getResultList();
        return list;
    }

    @Override
    public Activity get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Activity activity = currSession.get(Activity.class, id);
        return activity;
    }

    @Override
    public void save(Activity activity) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(activity);
        
    }

    @Override
    public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Activity activity = currSession.get(Activity.class, id);
		currSession.delete(activity);
        
    }
    
}
