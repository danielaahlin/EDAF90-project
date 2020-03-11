import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DrinkType } from './drinkType';
import { DrinkTypeService } from './drinkType.service';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-drink-type',
  templateUrl: './drink-type.component.html',
  styleUrls: ['./drink-type.component.css']
})

export class DrinkTypeComponent implements OnInit {
  drink: DrinkType;
  contents: any[] = [];

  constructor(private service: DrinkTypeService, private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    let idSplit = window.location.href.split('/');
    let id = idSplit[idSplit.length - 1];

    if (this.service.drinks === undefined) {
      await this.getValueWithPromise(Number(id));
      this.getContents(this.drink);
    } else {
      this.service.drinks.forEach(obj => {
        if (obj['idDrink'] === id) {
          this.drink = obj;
          this.getContents(this.drink);
          return;
        }
      });
    }
    console.log(this.drink);
  }

  promiseReturn(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.apiService.getCocktailById(x).subscribe(val => {
          resolve(x);
          this.drink = val['drinks'][0];
        });
      }, 2000);
    });
  }

  async getValueWithPromise(id) {
    const value = await this.promiseReturn(id);
  }

  getContents(drink) {
    var tempIngredient = '';
    var tempMeasure = '';
    for (var i = 1; i < 16; i++) {
      tempIngredient = 'strIngredient' + i;
      tempMeasure = 'strMeasure' + i;
      if (drink[tempIngredient] != null) {
          this.contents.push({"ingredient": drink[tempIngredient], "measure": drink[tempMeasure]})
      }
    } 
  }

}
