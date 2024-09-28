import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'


import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';



export class Offre {
  constructor(
  
    public NomOffre: string,
    public descriptionOffre: string,
    public PrixOffre: number,
    public DateDebut: Date,
    public DateFin: Date
  ) {}
}

@Component({
  selector: 'app-offre-admin',
  templateUrl: './offre-admin.component.html',
  styleUrls: ['./offre-admin.component.css']
})
export class OffreAdminComponent implements OnInit {




  offres: Offre[] = []; 
closeResult:string="";


  constructor(private httpClient: HttpClient,
private modalService : NgbModal

  ) { // Initialize httpClient in the constructor
  }

  ngOnInit(): void {
  }


  getOffres(){
    this.httpClient.get<any>('http://localhost:8085//api/offres').subscribe(
      response => {
        console.log(response);
        this.offres = response;
      }
    );
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    const url = 'http://localhost:8085/api/offres/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }


  openDetails(targetModal:any, offre: Offre) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
   
   
    document.getElementById('noffre')?.setAttribute('value',offre.NomOffre)
    document.getElementById('doffre')?.setAttribute('value',offre.descriptionOffre)
    document.getElementById('poffre')?.setAttribute('value',offre.PrixOffre.toString())
    document.getElementById('dd')?.setAttribute('value',offre.DateDebut.toString())
    document.getElementById('df')?.setAttribute('value',offre.DateFin.toString())
 }

}

