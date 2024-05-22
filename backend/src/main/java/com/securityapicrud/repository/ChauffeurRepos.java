package com.securityapicrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.securityapicrud.entity.Chauffeur;



@Repository

public interface ChauffeurRepos extends JpaRepository<Chauffeur, Long>  {
	

}
