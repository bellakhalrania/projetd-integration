import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chauffre-profile',
  templateUrl: './chauffre-profile.component.html',
  styleUrls: ['./chauffre-profile.component.css']
})
export class ChauffreProfileComponent implements OnInit {
  
  dataArray : any=[];
  username:any
  name:any
  role:any
  email:any
  id:any
  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.id = localStorage.getItem('id');
      this.username = localStorage.getItem('username');
      this.name = localStorage.getItem('username');
      console.log(this.username);
      this.role = localStorage.getItem('role');
      this.email = localStorage.getItem('email');

      console.log(this.email)
      
     
    } else {
     
      this.username = 'Username';
    }
   }

  ngOnInit(): void {
  }

}
