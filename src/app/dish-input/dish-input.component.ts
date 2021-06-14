import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dish-input',
  templateUrl: './dish-input.component.html',
  styleUrls: ['./dish-input.component.css']
})
export class DishInputComponent implements OnInit {

  id = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  
  }
  AddDish(){

    console.log(this.id.value)
  }

}
