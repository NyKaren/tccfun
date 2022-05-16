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
@Table(name = "tb_role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer role_id;
    
    @Column
    @NotNull
    private String role_description;

	@Column(columnDefinition = "TINYINT(1) default 1")
    @NotNull
    private Boolean role_status; //In the mysql, TINYINT(1)
    
    @ManyToOne
    @JoinColumn(name="user_role_id")
    private UserRole user_role;

    @Override
    public String toString() {
        return "Role [role_description=" + role_description + ", role_id=" + role_id + ", role_status=" + role_status
                + ", user_role=" + user_role + "]";
    }

    public Integer getRole_id() {
        return role_id;
    }

    public void setRole_id(Integer role_id) {
        this.role_id = role_id;
    }

    public String getRole_description() {
        return role_description;
    }

    public void setRole_description(String role_description) {
        this.role_description = role_description;
    }

    public Boolean getRole_status() {
        return role_status;
    }

    public void setRole_status(Boolean role_status) {
        this.role_status = role_status;
    }

    public UserRole getUser_role() {
        return user_role;
    }

    public void setUser_role(UserRole user_role) {
        this.user_role = user_role;
    }
    
    
}
