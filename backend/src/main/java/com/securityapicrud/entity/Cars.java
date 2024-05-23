package com.securityapicrud.entity;

import jakarta.persistence.*;


@Entity
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private long matricule;
    private String modele;
    private String line;
    private String etat;

  

    

    public Cars() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Cars( String name, long matricule, String modele, String line, String etat) {
		this.name = name;
		this.matricule = matricule;
		this.modele = modele;
		this.line = line;
		this.etat = etat;
		
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public long getMatricule() {
		return matricule;
	}



	public void setMatricule(long matricule) {
		this.matricule = matricule;
	}



	public String getModele() {
		return modele;
	}



	public void setModele(String modele) {
		this.modele = modele;
	}



	public String getLine() {
		return line;
	}



	public void setLine(String line) {
		this.line = line;
	}



	public String getEtat() {
		return etat;
	}



	public void setEtat(String etat) {
		this.etat = etat;
	}



	

   

    

    
}
