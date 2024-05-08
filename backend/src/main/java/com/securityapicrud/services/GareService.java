package com.securityapicrud.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.securityapicrud.entity.Gare;
import com.securityapicrud.repository.GareRepository;





@Service

public class GareService {
    
    private final GareRepository gareRepository; // Declare as final
    
    // No need to declare an explicit constructor, Lombok's @RequiredArgsConstructor will generate it
    
    public GareService(GareRepository gareRepository) {
		
		this.gareRepository = gareRepository;
	}

	public Gare postGare(Gare gare) {
        return gareRepository.save(gare);
    }
	
	public List<Gare> getAllGare(){
		return gareRepository.findAll();
	}
	
	public Gare getGareById(Long id) {
		return gareRepository.findById(id).orElse(null);
	}
	
	public Gare updateGare(Gare gare) {
		return gareRepository.save(gare); 
	}

	public void deletegare(Long id) {
		gareRepository.deleteById(id);
		
	}
}

