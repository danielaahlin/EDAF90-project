import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks/drinks.component';
import { AlcoholsComponent } from './alcohols/alcohols.component';
import { DrinkTypeComponent } from './drinks/drink-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'drinks', component: DrinksComponent},
  { path: 'alcohols', component: AlcoholsComponent},
  { path : 'drinks/:id', component: DrinkTypeComponent, data: {some_data: 'some_value'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
