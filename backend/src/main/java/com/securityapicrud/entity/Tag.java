package com.securityapicrud.entity;


import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;



import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "tags")
public class Tag {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 
 private String name;
 
 @JsonBackReference(value = "offre")
 @ManyToOne
 private Offre offre;
	
 @JsonProperty(access = Access.WRITE_ONLY)
 @ManyToMany(fetch = FetchType.LAZY)
 @JoinTable(name = "offre_tags",
     joinColumns = @JoinColumn(name = "offre_id"),
     inverseJoinColumns = @JoinColumn(name = "tag_id"))

 


 
 private List<Offre> offres;

 
 
 
 

 public Tag() {
  super();
 }
 
 public Tag(String name, Offre offre, List<Offre> offres) {
   super();
   this.name = name;
   this.offre = offre;
   this.offres = offres;
 }

 public Long  getId() {
   return id;
 }

 public void setId(long id) {
   this.id = id;
 }

 public String getName() {
   return name;
 }

 public void setName(String name) {
   this.name = name;
 }

 public Offre getOffre() {
   return offre;
 }

 public void setOffre(Offre offre) {
   this.offre = offre;
 }

 public List<Offre> getOffres() {
   return offres;
 }

 public void setOffres(List<Offre> offres) {
   this.offres = offres;
 }

 public void addOffreToTag(Offre offre) {
   if(getOffres()==null) {
     this.offres = new ArrayList<>();
 }
   if (!getOffres().contains(offre)) {
	   getOffres().add(offre);
  }
 }
   	
}

