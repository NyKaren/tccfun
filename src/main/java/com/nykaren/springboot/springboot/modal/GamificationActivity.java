package com.nykaren.springboot.springboot.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_gamification_activity")
public class GamificationActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer gamification_activity_id;
    
	@ManyToOne
    @JoinColumn(name="activity_id")
    private Activity gamification_activity_activity;
    //private Integer gamification_activity_activity_id; //id from the activity on other table

    @ManyToOne
    @JoinColumn(name="gamification_id")
    private Gamification gamification_activity_gamification;
    //private Integer gamification_activity_gamification_id; //id from the gamification on other table
    
    @Column(columnDefinition = "TINYINT(1) default 1")
    @NotNull
    private Boolean gamification_activity_status; //In the mysql, TINYINT(1)

    @Override
    public String toString() {
        return "GamificationActivity [gamification_activity_activity=" + gamification_activity_activity
                + ", gamification_activity_gamification=" + gamification_activity_gamification
                + ", gamification_activity_id=" + gamification_activity_id + ", gamification_activity_status="
                + gamification_activity_status + "]";
    }

    public Integer getGamification_activity_id() {
        return gamification_activity_id;
    }

    public void setGamification_activity_id(Integer gamification_activity_id) {
        this.gamification_activity_id = gamification_activity_id;
    }

    public Activity getGamification_activity_activity() {
        return gamification_activity_activity;
    }

    public void setGamification_activity_activity(Activity gamification_activity_activity) {
        this.gamification_activity_activity = gamification_activity_activity;
    }

    public Gamification getGamification_activity_gamification() {
        return gamification_activity_gamification;
    }

    public void setGamification_activity_gamification(Gamification gamification_activity_gamification) {
        this.gamification_activity_gamification = gamification_activity_gamification;
    }

    public Boolean getGamification_activity_status() {
        return gamification_activity_status;
    }

    public void setGamification_activity_status(Boolean gamification_activity_status) {
        this.gamification_activity_status = gamification_activity_status;
    }    
    
}
