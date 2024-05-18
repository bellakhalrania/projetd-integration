package com.securityapicrud.services;


import java.util.List;

import com.securityapicrud.entity.Offre;

public interface OffreService {
	
 Offre addProductToCategory(Offre offre, long idCategory);
	
 Offre editProduct(Offre offre, long id);
	
 Offre findProductById(long id);
	
 void deleteProduct(long id);
	
 List<Offre> findAllOffres();
	
 List<Offre> findProductsForCategory(long idCategory);
	
 Offre getOffre(long id);

}
