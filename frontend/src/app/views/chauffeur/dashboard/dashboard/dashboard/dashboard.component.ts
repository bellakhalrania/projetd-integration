import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  
  dataArray : any=[];
  dataGare={ 
    typeconge:'',
    startDate:'',
    endDate:'',
    id:'',
    reason:'',
    status:''
  }
  messageErr=''

  messageSuccess=''
  getStatusClass(status: string): string {
    switch (status) {
      case '1':
        return 'completed';
      case '':
        return 'in-progress';
      case '0':
        return 'pending';
      default:
        return '';
    }
  }
  constructor(private ds:DataService) {
    this.ds.getAllDemandeConge().subscribe(data=>{
    this.dataArray=data  
    console.log(data);
    })
   }


  ngOnInit(): void {
  }

}
