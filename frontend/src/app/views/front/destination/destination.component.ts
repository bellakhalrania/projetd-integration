import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  dataArray : any=[];
  
  constructor(private ds:DataService) {
    this.ds.getAllTrajets().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
