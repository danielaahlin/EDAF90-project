import { Component, OnInit, Injectable, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DrinkType } from './drinkType';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-drink-type',
  templateUrl: './drink-type.component.html',
  styleUrls: ['./drink-type.component.css']
})

export class DrinkTypeComponent implements OnInit {
  drink: Object;
  ingredients = [];
  measure = [];
  
  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    console.log(window.location.href);
    let idSplit = window.location.href.split('/');
    let id = idSplit[idSplit.length - 1];
    console.log(id);

    await this.getValueWithPromise(Number(id));
    console.log(this.drink);

    // for(const x in this.drink){
    //   if(x.match("strIngredient*") && this.drink[x] !== null){
    //     this.ingredients.push(this.drink[x]);
    //   }
    //   if(x.match("strMeasure*") && this.drink[x] !== null){
    //     this.measure.push(this.drink[x]);
    //   }
    // }

  }

  promiseReturn(x){
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
