import { Injectable } from "@angular/core";
import { DrinkType } from "./drinkType";
import { ApiService } from "../../api/api.service";



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
                        tmpDrinks.push(new DrinkType(drink));
                    });
                }
            });
        });
        this.drinks = tmpDrinks;
        console.log(this.drinks);
        return tmpDrinks;
    }
}