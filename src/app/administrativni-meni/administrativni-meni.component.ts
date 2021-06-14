import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Plate } from '../Plate';


@Component({
  selector: 'app-administrativni-meni',
  templateUrl: './administrativni-meni.component.html',
  styleUrls: ['./administrativni-meni.component.css']
})
export class AdministrativniMeniComponent implements OnInit {
  constructor() { }
  dishes = Plate;


  ngOnInit(): void {
  }

}


