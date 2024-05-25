package com.securityapicrud.entity;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
public class Chauffeur extends Personne{
    private double salaire;
    private String note;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "chauffeur_cars",
            joinColumns = @JoinColumn(name = "chauffeur_id"),
            inverseJoinColumns = @JoinColumn(name = "cars_id")
            
    )
    
    private Set<Cars> cars = new HashSet<>();

    public Chauffeur() {
        super();
    }

    
       

  
	public Chauffeur(String nom, String prenom, String email, String password, String role, double salaire,
			String note, Set<Cars> cars) {
		super(nom, prenom, email, password, role);
		this.salaire = salaire;
		this.note = note;
		this.cars = cars;
	}









	public double getSalaire() {
        return salaire;
    }

    public void setSalaire(double salaire) {
        this.salaire = salaire;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Set<Cars> getCars() {
        return cars;
    }

    public void setCars(Set<Cars> cars) {
        this.cars = cars;
    }
    public void setId (long id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "Chauffeur [salaire=" + salaire + ", note=" + note + ", cars=" + cars + "]";
    }
}
