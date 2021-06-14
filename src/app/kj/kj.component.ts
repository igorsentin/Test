import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kj',
  templateUrl: './kj.component.html',
  styleUrls: ['./kj.component.css']
})
export class KjComponent implements OnInit {
  text = "";
  p = 0;
  colors = ['red', 'yellow', 'blue', 'purple', 'black', 'green'];
  f = this.colors.length + 1;
  boja = this.colors[0];
  constructor() { }
  deleteText(): void {
    this.text = "";
  }
  randomColor() {
    const i = Math.floor(Math.random() * this.colors.length);
    this.p = i;
    if (this.f == this.p)
      this.p++;
    if (this.p == this.colors.length - 1)
      this.p = 0;
    this.boja = this.colors[this.p];
    this.f = this.p;
  }
  ngOnInit(): void {
  }

}
