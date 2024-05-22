package com.securityapicrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.securityapicrud.entity.Cars;

import jakarta.transaction.Transactional;
@Transactional
@Repository

public interface CarsRepos2 extends JpaRepository<Cars, Long> {

}




























