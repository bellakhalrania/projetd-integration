package com.securityapicrud.dto;



import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.securityapicrud.entity.Offre;


public interface OffreDao extends JpaRepository<Offre, Long>{
    @Query("SELECT p FROM Product p WHERE p.name LIKE :n")
    List<Offre> findByName(@Param("n") String name);
    
}
