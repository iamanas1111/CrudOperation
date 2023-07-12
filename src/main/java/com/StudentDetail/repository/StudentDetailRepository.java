package com.StudentDetail.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.StudentDetail.entity.StudentDetailEntity;

public interface StudentDetailRepository  extends JpaRepository<StudentDetailEntity, Integer>{

//	@Query(Value)
//	StudentDetailEntity save(int id, StudentDetailEntity studentDetailEntity);

}
