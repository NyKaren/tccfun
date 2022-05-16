package com.nykaren.springboot.springboot.controller;
import java.util.List;

import com.nykaren.springboot.springboot.modal.Activity;
import com.nykaren.springboot.springboot.service.ActivityService;

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
public class ActivityController {
	
	@Autowired
	private ActivityService activityService;
	
	@GetMapping("/activity")
	public List<Activity> get() {
		return activityService.get();
	}
	
	@PostMapping("/activity")
	public Activity save(@RequestBody Activity activity) {
		activityService.save(activity);
		return activity;
	}
	
	@GetMapping("/activity/{id}")
	public Activity get(@PathVariable int id) {
		return activityService.get(id);
	}
	
	@DeleteMapping("/activity/{id}")
	public String delete(@PathVariable int id) {
		
		activityService.delete(id);
		
		return "Activity removed with id "+id;
		
	}
	
	@PutMapping("/activity")
	public Activity update(@RequestBody Activity activity) {
		activityService.save(activity);
		return activity;
	}
    
}
