package com.securityapicrud.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.securityapicrud.dto.CategoryDao;
import com.securityapicrud.dto.OffreDao;
import com.securityapicrud.entity.Offre;
import com.securityapicrud.services.OffreService;
import com.securityapicrud.entity.*;


@Transactional
@Component
public class OffreServiceImpl implements OffreService {

	@Autowired
	private OffreDao offreDao;

	@Autowired
	private CategoryDao categoryDao;


	@Override
	 public Offre addOffreToCategory(Offre offre, long idCategory) {
		Category category = categoryDao.findById(idCategory).orElse(null);
		category.addOffreToCategory(offre);
		return offreDao.save(offre);
	}
	
	


	@Override
	public Offre editOffre(Offre offre, long id) {
		Offre existOffre = offreDao.findById(id).orElse(null);
		existOffre.setName(offre.getName());
		existOffre.setDescription(offre.getDescription());
		existOffre.setPictureUrl(offre.getPictureUrl());
		existOffre.setPrice(offre.getPrice());
		return offreDao.save(existOffre);
	}

	@Override
	public Offre findOffreById(long id) {
		return offreDao.findById(id).orElse(null);
	}

	@Override
	public void deleteOffre(long id) {
		offreDao.deleteById(id);
	}

	@Override
	public List<Offre> findAllOffres() {
		return offreDao.findAll();
	}

	@Override
	public List<Offre> findOffresForCategory(long idCategory) {
		Category category = categoryDao.findById(idCategory).orElse(null);
		return category.getOffres();
	}

	@Override
	public Offre getOffre(long id) {
		return offreDao.findById(id).orElse(null);
	}

}
