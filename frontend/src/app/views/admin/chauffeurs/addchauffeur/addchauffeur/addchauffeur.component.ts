import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addchauffeur',
  templateUrl: './addchauffeur.component.html',
  styleUrls: ['./addchauffeur.component.css']
})
export class AddchauffeurComponent implements OnInit {
  availableCars : any =[];
  constructor(private ds:DataService,private route:Router) { 
    
    this.ds.getAllbus().subscribe(data=>{
      this.availableCars=data  
      console.log(data);
      })
  }
 
  
  add(f:any){
    let data=f.value;
    console.log(data);
     this.ds.addchauffeur(data).subscribe(data=>console.log(data));
     this.route.navigate(['admin/listechauffeur'])
  }
  
  ngOnInit(): void {
  
  }


}
