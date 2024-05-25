package com.securityapicrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.securityapicrud.entity.Offre;
import com.securityapicrud.repository.OffreRepository;


@Service
public class OffreService {
	  @Autowired
	  public OffreRepository offreRepo;
	
	public List<Offre>getOffres() {
		return offreRepo.findAll();
}
	
	
	
	public void addOffre(Offre offre) {
		offreRepo.save(offre);
	}
	
	
	
	
	public void updateOffre(Offre offre) {
		offreRepo.save(offre);
	}
	
	
	
	
	public void deleteOffres(Integer idOffre) {
		offreRepo.deleteById(idOffre);

	}
	
	
	
}