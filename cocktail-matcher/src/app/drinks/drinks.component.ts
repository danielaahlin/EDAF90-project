import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api/api.service";
import { DrinkType } from './drink-type/drinkType';
import { DrinkTypeService } from './drink-type/drinkType.service';

@Component({
    selector: 'app-drinks',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.css']
})

export class DrinksComponent implements OnInit {
    drinks: DrinkType[];

    constructor(private apiService: ApiService, private drinkTypeService: DrinkTypeService) { }

    ngOnInit(): void {
        this.drinks = this.drinkTypeService.getDrinks(this.apiService);
    }
}
