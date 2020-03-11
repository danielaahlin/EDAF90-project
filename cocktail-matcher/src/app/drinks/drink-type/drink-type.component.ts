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

  constructor(private service: DrinkTypeService, private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    let idSplit = window.location.href.split('/');
    let id = idSplit[idSplit.length - 1];

    if (this.service.drinks === undefined) {
      await this.getValueWithPromise(Number(id));
    } else {
      this.service.drinks.forEach(obj => {
        if (obj['idDrink'] === id) {
          this.drink = obj;
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


}
