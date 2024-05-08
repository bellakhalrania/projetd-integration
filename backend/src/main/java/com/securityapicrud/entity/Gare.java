package com.securityapicrud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name= "Gare")
public class Gare {
	@Id   
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String nom_Gare;
    private String lieu;
    private String address;

	

	public Gare(Long id, String nom_Gare, String lieu, String address) {
		super();
		this.id = id;
		this.nom_Gare = nom_Gare;
		this.lieu = lieu;
		this.address = address;
	}


	public String getNom_Gare() {
		return nom_Gare;
	}


	public void setNom_Gare(String nom_Gare) {
		this.nom_Gare = nom_Gare;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLieu() {
		return lieu;
	}

	public void setLieu(String lieu) {
		this.lieu = lieu;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Gare [id=" + id + ", nom_Gare=" + nom_Gare + ", lieu=" + lieu + ", address=" + address + "]";
	}


	public Gare() {
		super();
	}

	
	
	

}
