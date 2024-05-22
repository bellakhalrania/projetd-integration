package com.securityapicrud.entity;

import jakarta.persistence.Entity;
import lombok.*;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
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
	public Passager(String email, String Prenom, String nom, String password, String role, String position,
			int nombreTicket) {
		super(email, Prenom, nom, password, role);
		this.position = position;
		this.nombreTicket = nombreTicket;
	}
	
}

