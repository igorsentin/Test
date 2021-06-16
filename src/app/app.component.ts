import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  booladmin = false;
  booluser = false;
  ok: any;
  


  ngOnInit(): void {
    this.ok = localStorage.getItem("this.dalje");
    if (this.ok == "1") {

      this.booluser = true;
    }
    if (this.ok == "2") {
      this.booluser = true;
      this.booladmin = true;
    }
  }

  Osvezi(): void{
    window.location.reload();
 }
}