package com.securityapicrud.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Offre {

	@Id   
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer idOffre;
	 private String NomOffre;
	 private String descriptionOffre;
	 private Float PrixOffre;
	 private Date DateDebut;
	 private Date DateFin;
	public Offre(Integer idOffre, String nomOffre, String descriptionOffre, Float prixOffre, Date dateDebut,
			Date dateFin) {
		super();
		this.idOffre = idOffre;
		this.NomOffre = nomOffre;
		this.descriptionOffre = descriptionOffre;
		this.PrixOffre = prixOffre;
		this.DateDebut = dateDebut;
		this.DateFin = dateFin;
	}
	 
	 
	public Offre() {}
	 
	 
}
