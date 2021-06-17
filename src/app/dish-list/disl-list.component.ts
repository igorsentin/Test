import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';;
import { Plate } from '../Plate';

@Component({
  selector: 'app-dish-list',
  templateUrl: './disl-list.component.html',
  styleUrls: ['./disl-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes:any[];
  filteredDishes:any[];
  selectedDish?: Dish;
  dlpretraga='';
  constructor() { }

  ngOnInit(): void {
    this.dishes = Plate;
    
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

  setSelectDish(dish:Dish): void {
    this.selectedDish = dish
  }

  Autopretraga() {
    this.filteredDishes = [];
    this.dishes = Plate;
    console.log(Plate);
    this.dishes.forEach((elem, idx) => {
      if (elem.name.toLowerCase().includes(this.dlpretraga.toLowerCase())) {
        this.filteredDishes.push(elem);
      }
    });
  }

}
