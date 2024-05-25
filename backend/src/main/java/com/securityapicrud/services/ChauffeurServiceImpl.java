package com.securityapicrud.services;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.securityapicrud.entity.Chauffeur;
import com.securityapicrud.repository.ChauffeurRepos;

import jakarta.transaction.Transactional;
@Service
@Primary
public class ChauffeurServiceImpl implements ChauffeurService{
	
	@Autowired
	
	 private ChauffeurRepos chauffeurRepos;

	@Override
	public Chauffeur createChauffeur(Chauffeur c) {
	    Chauffeur savedChauffeur = chauffeurRepos.save(c);
	    return savedChauffeur;
	}
	@Override
	public List<Chauffeur> getAllChauffeurs() {
	
			 
			 return chauffeurRepos.findAll(); 
	}
		

	@Override
	public Chauffeur getOneChauffeur(long id) {
		return chauffeurRepos.findById(id).get();
	}
	
	@Transactional

	@Override
	public Chauffeur saveChauffeur(Chauffeur c) {
		return chauffeurRepos.save(c);
		
	}

	@Override
	public Chauffeur updateChauffeur(Chauffeur c) {
		return chauffeurRepos.save(c);
		
		
	}

	@Override
	public void deleteChauffeur(Chauffeur c) {
		   chauffeurRepos.delete(c);
		
	}

	@Override
	public void deleteChauffeurById(Long id) {
		 chauffeurRepos.deleteById(id);
		
	}	

}
