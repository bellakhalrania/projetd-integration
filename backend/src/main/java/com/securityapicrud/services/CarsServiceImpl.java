package com.securityapicrud.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.securityapicrud.entity.Cars;
import com.securityapicrud.repository.CarsRepos2;




@Service
public class CarsServiceImpl implements CarsService {
    
	@Autowired
	 private CarsRepos2 carsRepos;
	
	
	@Override
	public Cars createCars(Cars c) {
	    return this.carsRepos.save(c);
	}

	@Override
	public Set<Cars> getAllCars() {
		 Set<Cars> all = (Set<Cars>)carsRepos.findAll();
		return all;
	}

	@Override
	public Cars getOneCars(long id) {
		return carsRepos.findById(id).get();
	}

	@Override
	public Cars saveCars(Cars c) {
	    return carsRepos.save(c);
	}


	@Override
	public Cars updateCars(Cars c) {
		return carsRepos.save(c);
	}

	@Override
	public void deleteCars(Cars c) {
		carsRepos.delete(c);
	}

	@Override
	public void deleteCarsById(Long id) {
		carsRepos.deleteById(id);
		
	}
	
	


	
}
