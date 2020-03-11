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
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule} from '@angular/material/tabs';

import { HttpClientModule } from '@angular/common/http';
import { DrinkTypeComponent } from './drinks/drink-type/drink-type.component';
import { SearchComponent } from './search/search.component';
import { DrinkTypeService } from './drinks/drink-type/drinkType.service';
import { AlcoholTypeComponent } from './alcohols/alcohol-type/alcohol-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinksComponent,
    AlcoholsComponent,
    DrinkTypeComponent,
    SearchComponent,
    AlcoholTypeComponent
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
    MatSortModule,
    MatDividerModule,
    MatTabsModule
  ],
  providers: [DrinkTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
