package com.securityapicrud.entity;


import java.util.ArrayList;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "categoires")
public class Category {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
	 
 private String name; 
 
 @JsonBackReference(value = "user")
 @ManyToOne
 private User user;
	 
 @JsonProperty(access = Access.WRITE_ONLY)
 @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
 private List<Offre> offres;
 
 public Category() {
  super();
 }
 
 public Category(String name, User user, List<Offre> offres) {
  super();
   this.name = name;
   this.user = user;
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

 public User getUser() {
   return user;
 }

 public void setUser(User user) {
   this.user = user;
 }

 public List<Offre> getOffres() {
   return offres;
 }

 public void setOffres(List<Offre> offres) {
   this.offres = offres;
 }
	 
 public void addOffreToCategory(Offre offre) {
  if (getOffres()==null) {
    this.offres = new ArrayList<>();
  }
  getOffres().add(offre);
    offre.setCategory(this);
 }	 
}
