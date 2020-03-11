import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-alcohols',
  templateUrl: './alcohols.component.html',
  styleUrls: ['./alcohols.component.css']
})
export class AlcoholsComponent implements OnInit {
  alcohols = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // await this.getValueWithPromise("Vodka");
    // console.log(this.alcohols);
    this.apiService.getIngredientsByType("Gin").subscribe(x => {
      x.forEach(alc => {
        this.alcohols.push(alc);
        console.log(alc);
      });
    });
    console.log(this.alcohols);
  }

  sortData(sort: Sort){

  }

  roundNumber(nbr){
    return Math.round(nbr);
  }

  // promiseReturn(x) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       this.apiService.getIngredientsByType(x).subscribe(val => {
  //         resolve(x);
  //         val.map(alc => this.alcohols.push(alc));
  //       });
  //     }, 2000);
  //   });
  // }

  // async getValueWithPromise(type) {
  //   const value = await this.promiseReturn(type);
  // }

}
