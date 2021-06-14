import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Plate } from '../Plate';

@Component({
  selector: 'app-dish-list',
  templateUrl: './disl-list.component.html',
  styleUrls: ['./disl-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes = Plate;
  selectedDish?: Dish;
  constructor() { }

  ngOnInit(): void {
    
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

  setSelectDish(dish:Dish): void {
    this.selectedDish = dish
  }


}
