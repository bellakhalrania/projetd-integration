import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-start-passager',
  templateUrl: './start-passager.component.html',
  styleUrls: ['./start-passager.component.css']
})
export class StartPassagerComponent implements OnInit {

  username:any;

  constructor(private ds: DataService) {
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('username');
     
    } else {
      // Handle the case where localStorage is not available
      this.username = 'Username'; // Replace with an appropriate fallback value
    }
  }
  ngOnInit(): void {
  }

}
