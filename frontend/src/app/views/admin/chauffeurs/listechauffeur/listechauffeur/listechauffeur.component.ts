import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-listechauffeur',
  templateUrl: './listechauffeur.component.html',
  styleUrls: ['./listechauffeur.component.css']
})
export class ListechauffeurComponent implements OnInit {

  dataArray : any=[];
  datachauffeur={ 
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
    this.ds.getAllchauffeur().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

   deleteChauffeur(id:any,i:number){
    this.ds.deletechauffeur(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }

  getdata(name:string,matricule:string,modele:string,line:string,etat:string,id:any){
    this.messageSuccess=''
    
    
  }

  update(f: any) {
    let data= f.value
    this.ds.updatechauffeur(this.datachauffeur.id,data).subscribe(
      response=>{
        console.log(response)
        let indexid = this.dataArray.findIndex((obj: any) => obj.id == this.datachauffeur.id);
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
