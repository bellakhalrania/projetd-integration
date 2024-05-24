import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-listepassager',
  templateUrl: './listepassager.component.html',
  styleUrls: ['./listepassager.component.css']
})
export class ListepassagerComponent implements OnInit {
  dataArray : any=[];
  
  messageErr=''

  messageSuccess=''

  constructor(private ds:DataService) {
    this.ds.getAllUsers().subscribe(data=>{
      if(data)
     this.dataArray=data  
    console.log(data);
    })
   }

   deletepassager(id:any,i:number){
    this.ds.deletebus(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)})
    
  }

  

  
  ngOnInit(): void {
  }


}
