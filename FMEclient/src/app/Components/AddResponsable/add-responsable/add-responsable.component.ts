import { Component, OnInit } from '@angular/core';
import {Responsable} from '../../../Model/Responsable';
import { ResponsableService } from '../../../Services/responsable.service';

@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.css']
})
export class AddResponsableComponent implements OnInit {
  responsables: Responsable[];
  responsable: Responsable =  {
    id: 1,
  adress: 'azaz',
  birthdate: 'azaza',
  firstName: 'aza',
  formation:'azaz',
  lastName: 'azaz',
  mailAdress: 'azaz',
  nat_id_num:'azaz',
  nationality:'azaz',
  phone: 'azaz',
  photoUrl: 'azaz',
  };
  constructor(private responsableService:ResponsableService) { }

  add(
  id: number,
  adress: string,
  birthdate: string,
  firstName: string,
  formation:string,
  lastName: string,
  mailAdress: string,
  nat_id_num:string,
  nationality: string,
  phone: string,
  photoUrl: string): void {
    this.responsableService.addResponsable({
      id,
      adress,
      birthdate,
      firstName,
      formation,
      lastName,
      mailAdress,
      nat_id_num,
      nationality,
      phone,
      photoUrl, } as Responsable)
      .subscribe(reesponsable => {
        this.responsables.push(reesponsable);
      });
  }


  ngOnInit() {
  }

}
