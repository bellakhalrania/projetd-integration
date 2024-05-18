package com.securityapicrud.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.securityapicrud.dto.OffreDao;
import com.securityapicrud.dto.TagDao;
import com.securityapicrud.entity.Offre;
import com.securityapicrud.entity.Tag;
import com.securityapicrud.services.TagService;


@Transactional
@Component
public class TagServiceeImpl implements TagService {
	
	@Autowired
	private TagDao tagDao;
	
	@Autowired
	private OffreDao offreDao;

	
	public void addTagToOffre(long idOffre, long idTag) {
		Offre offre = offreDao.findById(idOffre).orElse(null);
		Tag tag = tagDao.findById(idTag).orElse(null);
		tag.addOffreToTag(offre);
		offre.addTag(tag);
		
	}

	@Override
	public List<Tag> findTagsForOffre (long idOffre) {
		Offre offre = offreDao.findById(idOffre).orElse(null);
	
		 return offreDao.getTagsByOffre(offre);
	}

	@Override
	public void deleteTagFromOffre(long idTag, long idOffre) {
		Offre offre = offreDao.findById(idOffre).orElse(null);
		Tag tag = tagDao.findById(idTag).orElse(null);
		offre.getTags().remove(tag);
		
	}

	@Override
	public Tag addTag(Tag tag) {
		return tagDao.save(tag);
	}

	@Override
	public void deleteTag(long id) {
        tagDao.deleteById(id);
	}

	@Override
	public Tag findTagById(long id) {
		return tagDao.findById(id).orElse(null);
	}

	@Override
	public List<Tag> findAllTags() {
		return tagDao.findAll();
	}

	@Override
	public List<Offre> findOffreForTag(long idTag) {
		Tag tag = tagDao.findById(idTag).orElse(null);
		return tag.getOffres();
	}
	

}
