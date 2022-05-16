package com.nykaren.springboot.springboot.modal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_activity")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer activity_id;
    
    @Column
    @NotNull
    private String activity_description;
    
    @Column
    @NotNull
    private String activity_level;
    
    @Column
    @NotNull
    private Integer activity_points;

	@Column(columnDefinition = "TINYINT(1) default 1")
    @NotNull
    private Boolean activity_status; //In the mysql, TINYINT(1)

	@Column
    @OneToMany(mappedBy = "gamification_activity_activity")
    private List<GamificationActivity> gamification_activities = new ArrayList<>();

    @Override
    public String toString() {
        return "Activity [activity_description=" + activity_description + ", activity_id=" + activity_id
                + ", activity_level=" + activity_level + ", activity_points=" + activity_points + ", activity_status="
                + activity_status + ", gamification_activities="
                + gamification_activities+ "]";
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

    public List<GamificationActivity> getGamification_activities() {
        return gamification_activities;
    }

    public void setGamification_activities(List<GamificationActivity> gamification_activities) {
        this.gamification_activities = gamification_activities;
    }    
    
}