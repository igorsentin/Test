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
  filteredDishes = this.dishes;
  admpretraga='';
  ovo: any;
  ngOnInit(): void {
  }

  OnClickObrisi(dish:any): void{
    deteleDishByID(dish.id);
    this.dishes=Plate;
    
  }

  Autopretraga() {
    this.filteredDishes = [];
    this.dishes.forEach((elem, idx) => {
      if (elem.name.toLowerCase().includes(this.admpretraga.toLowerCase())) {
        this.filteredDishes.push(elem);
      }
    })
  }
}


