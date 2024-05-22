import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-list-trajet',
  templateUrl: './list-trajet.component.html',
  styleUrls: ['./list-trajet.component.css']
})
export class ListTrajetComponent implements OnInit {
 
  dataArray : any=[];
  dataTrajet={ 
    stationDepart:'',
    stationArrive:'',
    depart:'',/*new Date()*/
    arrive:'',
    id:''
  }
/**************************************/
  
/**************************************/

  messageErr=''

  messageSuccess=''

  constructor(private ds:DataService) {
    this.ds.getAllTrajets().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }
   deleteTrajet(id:any,i:number){
    this.ds.deleteTrajet(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }
  getdata(stationDepart:string,stationArrive:string,depart:any,arrive:any,id:any){
    this.messageSuccess=''
    this.dataTrajet.stationDepart=stationDepart;
    this.dataTrajet.stationArrive=stationArrive;
    this.dataTrajet.depart=depart.value;
    this.dataTrajet.arrive=arrive.value;
    this.dataTrajet.id=id;
  }/*
  update(f: any) {
    let data = f.value;
    this.ds.updategare(this.dataTrajet.id, data).subscribe(
      response => {
        console.log(response);
        let indexid = this.dataArray.findIndex((obj: any) => obj.id == this.dataTrajet.id);
        if (indexid !== -1 && this.dataArray[indexid]) {
          this.dataArray[indexid].stationDepart = data.stationDepart;
          this.dataArray[indexid].stationArrive = data.stationArrive;
          this.dataArray[indexid].depart = data.depart;
          this.dataArray[indexid].arrive = data.arrive;
          this.messageSuccess = ` Trajet modifé`;
        } else {
          console.error('Error: Invalid index or dataArray element is undefined.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }*/
  update(f: any) {
    let data: any = f.value;
    console.log('Données à envoyer :', data);
    // Convertir les valeurs depart et arrive en chaînes de caractères au format ISO
    let departString = new Date(data.depart).toISOString();
    let arriveString = new Date(data.arrive).toISOString();
  
    // Mettre à jour les données avec les valeurs converties
    data.depart = departString;
    data.arrive = arriveString;
  
    this.ds.updategare(this.dataTrajet.id, data).subscribe(
      response => {
        console.log('Réponse du serveur :', response);
        let indexid = this.dataArray.findIndex((obj: any) => obj.id == this.dataTrajet.id);
        if (indexid !== -1) {
          this.dataArray[indexid].stationDepart = data.stationDepart;
          this.dataArray[indexid].stationArrive = data.stationArrive;
          this.dataArray[indexid].depart = data.depart;
          this.dataArray[indexid].arrive = data.arrive;
          this.messageSuccess = `Trajet modifié`;
        } else {
          console.error('Error: Invalid index.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  

  ngOnInit(): void {
  }

}




 
  

  

   

 

  



