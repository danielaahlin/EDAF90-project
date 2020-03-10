import { Injectable } from "@angular/core";
import { DrinkType } from "./drinkType";
import { DrinkTypeComponent } from "./drink-type.component";
import { ApiService } from "../api/api.service";
import { DrinkComponent } from "./drink.component";



@Injectable()
export class DrinkTypeService {
    drinks: DrinkType[];

    getDrinks(apiService: ApiService){
        let tmpDrinks = [];
        let lettersAndNbrs = ['m'];
        lettersAndNbrs.map(letter => {
            apiService.getCocktailByfirstLetter(letter).subscribe(async res => {
                if(res["drinks"] !== null){
                    res["drinks"].map(drink => {
                        // console.log(drink);
                        tmpDrinks.push(new DrinkType(DrinkComponent, drink));
                    });
                }
            });
        });
        this.drinks = tmpDrinks;
        console.log(this.drinks);
        return tmpDrinks;
    }
}