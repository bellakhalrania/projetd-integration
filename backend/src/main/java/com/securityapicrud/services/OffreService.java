package com.securityapicrud.services;


import java.util.List;

import com.securityapicrud.entity.Offre;

public interface OffreService {
	
 Offre addOffreToCategory(Offre offre, long idCategory);
	
 Offre editOffre(Offre offre, long id);
	
 Offre findOffreById(long id);
	
 void deleteOffre(long id);
	
 List<Offre> findAllOffres();
	
 List<Offre> findOffresForCategory(long idCategory);
	
 Offre getOffre(long id);
 List<Offre> findByName(String name);

}
