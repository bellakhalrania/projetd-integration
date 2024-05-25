package com.securityapicrud.services;


import java.util.List;
import java.util.Set;

import com.securityapicrud.entity.Cars;



public interface CarsService{
	Cars createCars(Cars c);
	List<Cars> getAllCars();
	Cars getOneCars(long id);
	Cars saveCars(Cars c); 
	Cars updateCars(Cars c); 
	void deleteCars(Cars c); 
	void deleteCarsById(Long id);

}
