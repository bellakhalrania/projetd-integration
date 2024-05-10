package com.securityapicrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.securityapicrud.entity.Trajet;
import com.securityapicrud.repository.TrajetRepository;



@Service
public class TrajetService {
	 @Autowired
	    private TrajetRepository trajetRepository;
	 
	 
	 public List<Trajet> getAllTrajets() {
	        return trajetRepository.findAll();
	    }
	
	 
	   public Trajet postTrajet(Trajet trajet) {
	        return trajetRepository.save(trajet);
	    }
	   
	   public TrajetService(TrajetRepository trajetRepository) {
			
			this.trajetRepository = trajetRepository;
		}
	    public Trajet getTrajetById(Long id) {
	        return trajetRepository.findById(id).orElseThrow();
	    }
	    
	  
/*
	    public Trajet createTrajet(Trajet trajet) {
	        return trajetRepository.save(trajet);
	    }*/

	    public Trajet updateTrajet(Trajet trajet) {
	        return trajetRepository.save(trajet);
	    }
	   

	    public void deleteTrajet(Long id) {
	        trajetRepository.deleteById(id);
	    }
	   
	    

		

}
