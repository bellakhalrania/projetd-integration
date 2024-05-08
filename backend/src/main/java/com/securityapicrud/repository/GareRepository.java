package com.securityapicrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.securityapicrud.entity.Gare;



@Repository
public interface GareRepository extends JpaRepository<Gare, Long> {

}
