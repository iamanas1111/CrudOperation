package com.StudentDetail.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="student")
public class StudentDetailEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String studentName;
	private String email;
	private String address;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_add_id")
	private StudentCourseEntity course1;


	public void setCourse1(Object setCourse, Object setCollege) {
		// TODO Auto-generated method stub
		
	}


	
	



}
