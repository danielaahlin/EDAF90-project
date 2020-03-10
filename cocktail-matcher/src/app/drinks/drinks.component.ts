import { Component, OnInit, Injectable, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ApiService } from "../api/api.service";
import { DrinkTypeComponent } from "./drink-type.component";
import { DrinkType } from './drinkType';
import { DrinkTypeService } from './drinkType.service';

@Component({
    selector: 'app-drinks',
    template: `
    <div>
        <app-drink-type [drinks]="drinks"></app-drink-type>
    </div>
    `,
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.css']
})

export class DrinksComponent implements OnInit, OnDestroy {
    drinks: DrinkType[];

    constructor(private apiService: ApiService, private drinkTypeService: DrinkTypeService) { }

    ngOnInit(): void {
        this.drinks = this.drinkTypeService.getDrinks(this.apiService);
        console.log(this.drinks);
    }

    ngOnDestroy(): void {
        console.log('run')
    }

    // setDrinks() : DrinkType[] {
    //     // let lettersAndNbrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd',
    //     // 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    //     // 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //     let tmpDrinks = [];
    //     let lettersAndNbrs = ['m'];
    //     lettersAndNbrs.map(letter => {
    //         this.apiService.getCocktailByfirstLetter(letter).subscribe(res => {
    //             if(res["drinks"] !== null){
    //                 res["drinks"].map(drink => {
    //                     // console.log(drink);
    //                     tmpDrinks.push(new DrinkType(DrinkTypeComponent, drink));
    //                 });
    //             }
    //         });
    //     });
    //     return tmpDrinks;
    // }

    onSelect(drinkType: DrinkType) {
        return drinkType;
    }
}
