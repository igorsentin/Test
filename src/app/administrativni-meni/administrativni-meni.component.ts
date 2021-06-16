import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { deteleDishByID, Plate } from '../Plate';


@Component({
  selector: 'app-administrativni-meni',
  templateUrl: './administrativni-meni.component.html',
  styleUrls: ['./administrativni-meni.component.css']
})
export class AdministrativniMeniComponent implements OnInit {
  constructor() { }
  dishes = Plate;
  admpretraga='';
  ovo: any;
  ngOnInit(): void {
  }

  OnClickObrisi(dish:any): void{
    deteleDishByID(dish.id);
    this.dishes=Plate;
    
  }

}


