import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-list-gare',
  templateUrl: './list-gare.component.html',
  styleUrls: ['./list-gare.component.css']
})
export class ListGareComponent implements OnInit {

  dataArray : any=[];
  dataGare={ 
    nom_Gare:'',
    lieu:'',
    address:'',
    id:''
  }
  messageErr=''

  messageSuccess=''

  constructor(private ds:DataService) {
    this.ds.getAllGare().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

   deletegare(id:any,i:number){
    this.ds.deletegare(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }

  getdata(nom_Gare:string,lieu:string,address:string,id:any){
    this.messageSuccess=''
    this.dataGare.nom_Gare=nom_Gare;
    this.dataGare.lieu=lieu;
    this.dataGare.address=address;
    this.dataGare.id=id;
  }

  update(f: any) {
    let data= f.value
    this.ds.updategare(this.dataGare.id,data).subscribe(
      response=>{
        console.log(response)
        let indexid = this.dataArray.findIndex((obj: any) => obj.id == this.dataGare.id);
        if (indexid !== -1 && this.dataArray[indexid]) {
          this.dataArray[indexid].nom_Gare = data.nom_Gare;
          this.dataArray[indexid].lieu = data.lieu;
          this.dataArray[indexid].address = data.address;
       
          this.messageSuccess = ` gare modifé`;
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
