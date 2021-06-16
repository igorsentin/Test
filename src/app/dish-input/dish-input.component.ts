import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { addDishById } from '../Plate';

@Component({
  selector: 'app-dish-input',
  templateUrl: './dish-input.component.html',
  styleUrls: ['./dish-input.component.css']
})
export class DishInputComponent implements OnInit {

  inpime='';
  inptip='';
  inpcena:number;
  id = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  
  }

  AddDish(){
    addDishById(this.inpime,this.inptip,this.inpcena)
    console.log(this.id.value)
  }

}
