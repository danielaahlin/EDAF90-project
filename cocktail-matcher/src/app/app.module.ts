import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks/drinks.component';
import { AlcoholsComponent } from './alcohols/alcohols.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';


import { HttpClientModule } from '@angular/common/http';
import { DrinkTypeComponent } from './drinks/drink-type.component';
import { SearchComponent } from './search/search.component';
import { DrinkTypeService } from './drinks/drinkType.service';
import { DrinkTypeDirective } from './drinks/drinkType.directive';
import { DrinkComponent } from './drinks/drink.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinksComponent,
    AlcoholsComponent,
    DrinkTypeComponent,
    SearchComponent,
    DrinkTypeDirective,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
  ],
  entryComponents: [DrinkComponent],
  providers: [DrinkTypeService],
  bootstrap: [AppComponent],
  exports: [
    DrinkComponent
  ]
})
export class AppModule { }
