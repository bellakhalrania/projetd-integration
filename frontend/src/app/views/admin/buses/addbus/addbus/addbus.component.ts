import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  constructor(private ds:DataService,private route:Router) { }
 
  add(f:any){
    let data=f.value;
    console.log(data);
     this.ds.addGare(data).subscribe(data=>console.log(data));
     this.route.navigate(['admin/list-gare'])
  }
  
  ngOnInit(): void {
  
  }

}
