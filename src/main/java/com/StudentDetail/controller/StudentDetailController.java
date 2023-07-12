package com.StudentDetail.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.StudentDetail.entity.StudentDetailEntity;
import com.StudentDetail.service.StudentDetailService;

@RestController
@CrossOrigin("*")
@RequestMapping("/student")
public class StudentDetailController {
	
	@Autowired
	private StudentDetailService studentDetailService;
	
	@PostMapping("/add")
	public StudentDetailEntity addStudent(@RequestBody StudentDetailEntity studentDetailEntity){
		return this.studentDetailService.addStudent(studentDetailEntity);
	}
	
	@GetMapping("/getAll")
	public List<StudentDetailEntity> getAll() {
		return this.studentDetailService.getAll();
	}
	
	@GetMapping("/getById/{id}")
	
	public Optional<StudentDetailEntity> getSingle(@PathVariable int id) {
		System.out.print(id);
		return this.studentDetailService.getSingle(id);
	}
	
	@DeleteMapping("/deleteSingle/{id}")
	public void deleteSingle(@PathVariable int id) {
	    this.studentDetailService.deleteSingle(id);
	}
	
	@PutMapping("/update/{id}")
	public StudentDetailEntity update(@PathVariable int id, @RequestBody StudentDetailEntity studentDetailEntity) {
		return this.studentDetailService.update(id,studentDetailEntity);
	}

}
