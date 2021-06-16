import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { User } from '../user';
import { adminlist } from '../admin-list';
import { userlist } from '../user-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

logujime='';
logujsifru='';
ad=false;
dalje=0;
povratno='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.ad == false) {
      for (let index = 0; index < userlist.length; index++) {
        if (   this.logujime == userlist[index].ime &&
               
               
               
               this.logujsifru == userlist[index].sifra)
          {
            this.dalje = 1
            localStorage.setItem("this.dalje",JSON.stringify(this.dalje));
            this.router.navigate(['/dish-list']);
          }
          else
          {
            if (   this.logujime == userlist[index].ime &&
                   this.logujsifru != userlist[index].sifra)
            {
              this.logujime="";
              this.logujsifru="";
              this.povratno=('------greska');
            }
          }
      }
    }
    if (this.ad == true) {
      for (let index = 0; index < adminlist.length; index++) {
        if (  this.logujime == adminlist[index].ime &&
              this.logujsifru == adminlist[index].sifra)
          {
            this.dalje = 2
            localStorage.setItem("this.dalje",JSON.stringify(this.dalje));
            this.router.navigate(['/administrativni-meni']);
          }
          if (   this.logujime == userlist[index].ime &&
                 this.logujsifru != userlist[index].sifra)
            {
              this.logujime="";
              this.logujsifru="";
              this.povratno=('------greska');
            }
      }

    }
  }
}
