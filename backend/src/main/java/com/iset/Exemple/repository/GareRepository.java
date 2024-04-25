package com.iset.Exemple.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iset.Exemple.entity.Gare;

@Repository
public interface GareRepository extends JpaRepository<Gare, Long> {

}
