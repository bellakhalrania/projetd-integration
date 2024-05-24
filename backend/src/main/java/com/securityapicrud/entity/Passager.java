package com.securityapicrud.entity;

import jakarta.persistence.Entity;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;


@Entity

@NoArgsConstructor
@AllArgsConstructor
public class Passager extends Personne {
    private String position;
    private int nombreTicket;
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public int getNombreTicket() {
		return nombreTicket;
	}
	public void setNombreTicket(int nombreTicket) {
		this.nombreTicket = nombreTicket;
	}
	public Passager(Long id, String nom, String prenom, String email, String password, String role, String position,
			int nombreTicket) {
		super(id, nom, prenom, email, password, role);
		this.position = position;
		this.nombreTicket = nombreTicket;
	}
	
	
}

