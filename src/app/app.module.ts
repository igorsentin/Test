import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KjComponent } from './kj/kj.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DishListComponent } from './dish-list/disl-list.component';

import { DishDetailedComponent } from './dish-detailed/dish-detailed.component';
import { IndeksStranaComponent } from './indeks-strana/indeks-strana.component';
import { AdministrativniMeniComponent } from './administrativni-meni/administrativni-meni.component';
import { DishInputComponent } from './dish-input/dish-input.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    KjComponent,
    HeroesComponent,
    DishListComponent,

    DishDetailedComponent,
     IndeksStranaComponent,
     AdministrativniMeniComponent,
     DishInputComponent,
     HeroDetailComponent,
     MessagesComponent,
     DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
