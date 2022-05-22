package com.nykaren.springboot.springboot.modal;

import javax.persistence.*;

@Entity
@Table(name = "tb_role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer role_id;
    
    @Column(nullable = false, length = 45)
    private String role_description;

	@Column(nullable = false,columnDefinition = "TINYINT(1) default 1")
    private Boolean role_status; //In the mysql, TINYINT(1)

    public Role() { }

    public Role(String role_description) {
        this.role_description = role_description;
        this.role_status = true;
    }

    public Role(Integer role_id, String role_description) {
        this.role_id = role_id;
        this.role_description = role_description;
        this.role_status = true;
    }

    public Role(Integer role_id) {
        this.role_id = role_id;
    }

    @Override
    public String toString() {
        return this.role_description;
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
    
}
