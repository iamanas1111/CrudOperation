package com.StudentDetail.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.StudentDetail.entity.StudentDetailEntity;
import com.StudentDetail.repository.StudentDetailRepository;

@Service
public class StudentDetailService {
	
	@Autowired
	private StudentDetailRepository studentDetailRepository;

	public StudentDetailEntity addStudent(StudentDetailEntity studentDetailEntity) {
		
		return this.studentDetailRepository.save(studentDetailEntity);
	}

	public List<StudentDetailEntity> getAll() {
		return this.studentDetailRepository.findAll();
	}

	public Optional<StudentDetailEntity> getSingle(int id) {
		return this.studentDetailRepository.findById(id);
	}

	public void deleteSingle(int id) {
		this.studentDetailRepository.deleteById(id);
		
	}

	public StudentDetailEntity update(int id, StudentDetailEntity studentDetailEntity) {
		StudentDetailEntity studentDetailEntitydb = this.studentDetailRepository.findById(id).orElse(studentDetailEntity);
		studentDetailEntitydb.setStudentName(studentDetailEntity.getStudentName());
		studentDetailEntitydb.setAddress(studentDetailEntity.getAddress());
		studentDetailEntitydb.setEmail(studentDetailEntity.getEmail());
		return this.studentDetailRepository.save(studentDetailEntitydb);
	}

}
