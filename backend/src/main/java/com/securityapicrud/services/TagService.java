package com.securityapicrud.services;



import java.util.List;

import com.securityapicrud.entity.Offre;
import com.securityapicrud.entity.Tag;
public interface TagService {
	
 void addTagToOffre(long idOffre, long idTag);
	
 List<Tag> findTagsForOffret(long idOffre);
	
 List<Tag> findAllTags();
	
 void deleteTagFromOffre(long idTag, long idOffre);
	
 Tag addTag(Tag tag);
	
 void deleteTag(long id);
	
 Tag findTagById(long id);
	 
 List<Offre> findOffresForTag(long idTag);

}

