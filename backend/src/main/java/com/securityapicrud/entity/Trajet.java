package com.securityapicrud.entity;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Trajet {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String StationDepart;
	    private String StationArrive;
	    private LocalDateTime depart;
	    private LocalDateTime arrive;
	    public Trajet(/*Long id, String stationDepart, String stationArrive, Date depart, Date arrive*/) {
			/*this.id = id;
			StationDepart = stationDepart;
			StationArrive = stationArrive;
			this.depart = depart;
			this.arrive = arrive;*/
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getStationDepart() {
			return StationDepart;
		}
		public void setStationDepart(String stationDepart) {
			StationDepart = stationDepart;
		}
		public String getStationArrive() {
			return StationArrive;
		}
		public void setStationArrive(String stationArrive) {
			StationArrive = stationArrive;
		}
		public LocalDateTime getDepart() {
			return depart;
		}
		public void setDepart(LocalDateTime depart) {
			this.depart = depart;
		}
		public LocalDateTime getArrive() {
			return arrive;
		}
		public void setArrive(LocalDateTime arrive) {
			this.arrive = arrive;
		}
		
}
