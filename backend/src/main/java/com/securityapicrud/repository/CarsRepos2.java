package com.securityapicrud.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.securityapicrud.entity.Cars;
import com.securityapicrud.entity.Role;

import jakarta.transaction.Transactional;
@Transactional
@Repository

public interface CarsRepos2 extends JpaRepository<Cars, Long> {
	Optional<Role> findByName(String name);

}




























