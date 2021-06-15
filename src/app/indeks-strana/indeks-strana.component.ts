import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { User } from '../user';
import { adminlist } from '../admin-list';
import { userlist } from '../user-list';


@Component({
  selector: 'app-indeks-strana',
  templateUrl: './indeks-strana.component.html',
  styleUrls: ['./indeks-strana.component.css']
})
export class IndeksStranaComponent implements OnInit {
  indeksid=2;
  indeksime = '';
  indeksprezime = '';
  indeksadresa = '';
  indeksemail = '';
  indekssifra = '';
  sh: boolean = false;
  dalje = 0;
  povratnitekst='ovde';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.sh == false) {
      for (let index = 0; index < userlist.length; index++) {
        if (   this.indeksime == userlist[index].ime &&
               this.indeksprezime == userlist[index].prezime &&
               this.indeksadresa == userlist[index].adresa &&
               this.indeksemail == userlist[index].email &&
               this.indekssifra == userlist[index].sifra)
          {
            this.dalje = 1
          }
          else
          {
            if (   this.indeksime == userlist[index].ime &&
                   this.indeksprezime != userlist[index].prezime &&
                   this.indeksadresa != userlist[index].adresa &&
                   this.indeksemail != userlist[index].email &&
                   this.indekssifra != userlist[index].sifra)
            {
              this.indeksprezime="";
              this.indeksadresa="";
              this.indeksemail="";
              this.indekssifra="";
            }
          }
      }
    }
    if (this.sh == true) {
      for (let index = 0; index < adminlist.length; index++) {
        if (  this.indeksime == adminlist[index].ime &&
              this.indeksprezime == adminlist[index].prezime &&
              this.indeksemail == adminlist[index].email &&
              this.indekssifra == adminlist[index].sifra)
          {
            this.dalje = 2
          }
          if (   this.indeksime == userlist[index].ime &&
                 this.indeksprezime != userlist[index].prezime &&
                 this.indeksemail != userlist[index].email &&
                 this.indekssifra != userlist[index].sifra)
            {
              this.indeksprezime="";
              this.indeksemail="";
              this.indekssifra="";
            }
      }

    }
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
            this.povratnitekst=('------uspesno!-usr--> '+this.indeksime);
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
            this.povratnitekst=('------uspesno!-adm--> '+this.indeksime);
        }
    }
    this.indeksid++;
  }

}