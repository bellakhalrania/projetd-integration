package com.securityapicrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.securityapicrud.entity.Offre;
@Repository
public interface OffreRepository  extends JpaRepository<Offre, Integer>  {

}
