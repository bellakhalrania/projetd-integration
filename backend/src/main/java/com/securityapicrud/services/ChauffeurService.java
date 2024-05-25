package com.securityapicrud.services;

import java.util.*;

import com.securityapicrud.entity.Chauffeur;


public interface ChauffeurService {
	Chauffeur createChauffeur(Chauffeur c);
	List<Chauffeur> getAllChauffeurs();
	Chauffeur getOneChauffeur(long id);
	Chauffeur saveChauffeur(Chauffeur c); 
	Chauffeur updateChauffeur(Chauffeur c); 
	void deleteChauffeur(Chauffeur c); 
	void deleteChauffeurById(Long id); 
	
}


































