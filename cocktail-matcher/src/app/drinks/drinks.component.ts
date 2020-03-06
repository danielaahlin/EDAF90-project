import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from "../api/api.service";
import { DrinkTypeComponent } from "../drink-type/drink-type.component";

@Component({
    selector: 'app-drinks',
    templateUrl: './drinks.component.html',
    styleUrls: ['./drinks.component.css']
})

@Injectable()
export class DrinksComponent implements OnInit {
    drinks = [];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        // let lettersAndNbrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd',
        // 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        // 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let lettersAndNbrs = ['m'];
        lettersAndNbrs.map(letter => {
            this.apiService.getCocktailByfirstLetter(letter).subscribe(res => {
                if(res["drinks"] !== null){
                    res["drinks"].map(drink => {
                        console.log(drink);
                        this.drinks.push(drink);
                    });
                }
            });
        });
    }

    onSelect(drinkType: Object): DrinkTypeComponent {
        return new DrinkTypeComponent(drinkType);
    }
}
