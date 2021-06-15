import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KjComponent } from './kj/kj.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AdministrativniMeniComponent } from './administrativni-meni/administrativni-meni.component';
import { IndeksStranaComponent } from './indeks-strana/indeks-strana.component';
import { DishListComponent } from './dish-list/disl-list.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kj', component: KjComponent },
  { path: '', redirectTo: 'indeks-strana', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'administrativni-meni', component: AdministrativniMeniComponent },
  { path: 'indeks-strana', component: IndeksStranaComponent },
  { path: 'dish-list', component: DishListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }