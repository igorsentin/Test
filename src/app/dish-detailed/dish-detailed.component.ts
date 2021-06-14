import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'app-dish-detailed',
  templateUrl: './dish-detailed.component.html',
  styleUrls: ['./dish-detailed.component.css']
})
export class DishDetailedComponent implements OnInit {
  @Input() dishToDisplay:any;

  constructor() { }
  ngOnInit(): void {
  }

}
