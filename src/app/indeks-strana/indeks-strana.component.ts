import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { User } from '../user';
import { adminlist } from '../admin-list';
import { userlist } from '../user-list';
import { Router } from '@angular/router';


@Component({
  selector: 'app-indeks-strana',
  templateUrl: './indeks-strana.component.html',
  styleUrls: ['./indeks-strana.component.css']
})
export class IndeksStranaComponent implements OnInit {
  indeksid=Number(localStorage.getItem("this.indeksid"));
  indeksime = '';
  indeksprezime = '';
  indeksadresa = '';
  indeksemail = '';
  indekssifra = '';
  sh: boolean = false;
  dalje = 0;
  povratnitekst=':';
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("this.dalje",JSON.stringify(this.dalje));
    
  }
  onClickNovo() {
    if (this.sh == false) {
      if (  this.indeksime != '' &&
            this.indeksprezime != '' &&
            this.indeksadresa != '' &&
            this.indeksemail != '' &&
            this.indekssifra != '')
        {
          var obj= JSON.stringify({id:this.indeksid,
            ime:this.indeksime,
            prezime:this.indeksprezime,
            adresa:this.indeksadresa,
            email:this.indeksemail,
            sifra:this.indekssifra})
            localStorage.setItem("user",obj);
            this.dalje = 1
            localStorage.setItem("this.dalje",JSON.stringify(this.dalje));
            this.povratnitekst=('------uspesno!-usr--> '+this.indeksime);
            this.router.navigate(['/dish-list']);
        }
    }
    if (this.sh == true) {
      if ( this.indeksime != '' &&
           this.indeksprezime != '' &&
           this.indeksemail != '' &&
           this.indekssifra != '')
        {
          var obj= JSON.stringify({id:this.indeksid,
            ime:this.indeksime,
            prezime:this.indeksprezime,
            email:this.indeksemail,
            sifra:this.indekssifra})
            localStorage.setItem("admin",obj);
            this.dalje = 2
            localStorage.setItem("this.dalje",JSON.stringify(this.dalje));
            this.povratnitekst=('------uspesno!-adm--> '+this.indeksime);
            this.router.navigate(['/administrativni-meni']);
        }
    }
    this.indeksid++;
    localStorage.setItem("this.indeksid",JSON.stringify(this.indeksid));

  }

  rf(): void{
    this.router.navigate(['/logovanje']);
  }

}