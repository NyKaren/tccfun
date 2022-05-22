package com.nykaren.springboot.springboot.modal;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_activity")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer activity_id;
    
    @Column(nullable = false, unique = true, length = 255)
    private String activity_description;
    
    @Column(nullable = false)
    private String activity_level;
    
    @Column(nullable = false)
    private Integer activity_points;

	@Column(columnDefinition = "TINYINT(1) default 1")
    @NotNull
    private Boolean activity_status; //In the mysql, TINYINT(1)

    public Activity() { }

    public Activity(String activity_description) {
        this.activity_description = activity_description;
    }

    public Activity(Integer activity_id, String activity_description) {
        this.activity_id = activity_id;
        this.activity_description = activity_description;
    }

    public Activity(Integer activity_id) {
        this.activity_id = activity_id;
    }

    @Override
    public String toString() {
        return this.activity_description;
    }

    public Integer getActivity_id() {
        return activity_id;
    }

    public void setActivity_id(Integer activity_id) {
        this.activity_id = activity_id;
    }

    public String getActivity_description() {
        return activity_description;
    }

    public void setActivity_description(String activity_description) {
        this.activity_description = activity_description;
    }

    public String getActivity_level() {
        return activity_level;
    }

    public void setActivity_level(String activity_level) {
        this.activity_level = activity_level;
    }

    public Integer getActivity_points() {
        return activity_points;
    }

    public void setActivity_points(Integer activity_points) {
        this.activity_points = activity_points;
    }

    public Boolean getActivity_status() {
        return activity_status;
    }

    public void setActivity_status(Boolean activity_status) {
        this.activity_status = activity_status;
    }
    
}