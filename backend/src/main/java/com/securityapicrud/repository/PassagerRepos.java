package com.securityapicrud.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.securityapicrud.entity.Passager;



@Repository
public interface PassagerRepos extends JpaRepository<Passager, Long> {
}

