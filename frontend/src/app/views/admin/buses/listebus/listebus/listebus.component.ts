import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-listebus',
  templateUrl: './listebus.component.html',
  styleUrls: ['./listebus.component.css']
})
export class ListebusComponent implements OnInit {

  dataArray : any=[];
  databus={ 
    name:'',
    matricule:'',
    modele:'',
    line:'',
    etat:'',
    id:''
  }
  messageErr=''

  messageSuccess=''

  constructor(private ds:DataService) {
    this.ds.getAllbus().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

   deletebus(id:any,i:number){
    this.ds.deletebus(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }

  getdata(name:string,matricule:string,modele:string,line:string,etat:string,id:any){
    this.messageSuccess=''
    this.databus.name=name;
    this.databus.matricule=matricule;
    this.databus.modele=modele;
    this.databus.line=line;
    this.databus.etat=etat;
    this.databus.id=id;
    
  }

  update(f: any) {
    let data= f.value
    this.ds.updatebus(this.databus.id,data).subscribe(
      response=>{
        console.log(response)
        let indexid = this.dataArray.findIndex((obj: any) => obj.id == this.databus.id);
        if (indexid !== -1 && this.dataArray[indexid]) {
          this.dataArray[indexid].name = data.name;
          this.dataArray[indexid].matricule = data.matricule;
          this.dataArray[indexid].modele = data.modele;
          this.dataArray[indexid].line = data.line;
          this.dataArray[indexid].etat = data.etat;
       
          this.messageSuccess = ` bus modifé`;
        } else {
          console.error('Error: Invalid index or dataArray element is undefined.');
        }
        
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error.message)})
   
  }
  ngOnInit(): void {
  }

}
