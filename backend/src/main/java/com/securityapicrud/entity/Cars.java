package com.securityapicrud.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Getter
@Setter
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

    @ManyToMany(mappedBy = "cars")
    private List<Chauffeur> listeChauffeurs;

    public Cars() {
        this.listeChauffeurs = new ArrayList<>();
    }

    

    public Cars( String name, long matricule, String modele, String line, String etat,
			List<Chauffeur> listeChauffeurs) {
		this.name = name;
		this.matricule = matricule;
		this.modele = modele;
		this.line = line;
		this.etat = etat;
		this.listeChauffeurs = listeChauffeurs;
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

    public List<Chauffeur> getListeChauffeurs() {
        return listeChauffeurs;
    }

    public void setListeChauffeurs(List<Chauffeur> listeChauffeurs) {
        this.listeChauffeurs = listeChauffeurs;
    }

    @Override
    public String toString() {
        return "Cars{" +
                "idBus=" + id +
                ", name='" + name + '\'' +
                ", matricule=" + matricule +
                ", modele='" + modele + '\'' +
                ", line='" + line + '\'' +
                ", etat='" + etat + '\'' +
                ", listeChauffeurs=" + listeChauffeurs +
                '}';
    }
}
