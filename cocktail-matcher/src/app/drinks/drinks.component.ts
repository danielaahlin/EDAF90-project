import { Component, OnInit, Injectable, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from "../api/api.service";
import { DrinkTypeComponent } from "../drink-type/drink-type.component";
import { DrinkType } from '../drink-type/drinkType';

@Component({
    selector: 'app-drinks',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.css']
})

export class DrinksComponent implements OnInit {
    drinks: DrinkType[];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.drinks = this.setDrinks();
        console.log(this.drinks);
    }

    setDrinks() : DrinkType[] {
        // let lettersAndNbrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd',
        // 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        // 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let tmpDrinks = [];
        let lettersAndNbrs = ['m'];
        lettersAndNbrs.map(letter => {
            this.apiService.getCocktailByfirstLetter(letter).subscribe(res => {
                if(res["drinks"] !== null){
                    res["drinks"].map(drink => {
                        // console.log(drink);
                        tmpDrinks.push(new DrinkType(DrinkTypeComponent, drink));
                    });
                }
            });
        });
        return tmpDrinks;
    }

    onSelect(drinkType: DrinkType) {
        return drinkType;
    }
}
