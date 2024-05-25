import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataArray : any=[];
  
  
    
  constructor(private ds:DataService) {
    setTimeout(()=>{
    this.ds.getAllUsers().subscribe(data=>{
      this.dataArray=data  
      console.log(data);
    })},100);
   }

  ngOnInit(): void {
  }
  User:any
  messageErr=''
  messageEr=''
  messageSu=''
  searchname:any

  getUser(id:any){
    this.ds.getuserById(id).subscribe(
      (response) =>{ (this.User = response)
      console.log(this.User)}
  ,(err) => {
    console.log(err)
    this.messageErr = "Une erreur s'est produite lors du chargement des utilisateurs.";
  })
  }

  
  onSearchName() {
    if (this.searchname) {
      this.ds.getuserByUsername(this.searchname).subscribe(
        (data) => {
          this.dataArray = [data];
          this.messageSu = 'Utilisateur trouvé';
        },
        (error) => {
          console.error(error);
          this.messageEr = 'Une erreur sest produite lors de la recherche de lutilisateur.';
        }
      );
    } else {
      this.ds.getAllUsers().subscribe(
        (data) => {
          this.dataArray = data;
          this.messageSu = 'Tous les utilisateurs ont été trouvés';
        },
        (error) => {
          console.error(error);
          this.messageEr = 'Une erreur sest produite lors de la récupération de tous les utilisateurs.';
        }
      );
    }
  }

}
