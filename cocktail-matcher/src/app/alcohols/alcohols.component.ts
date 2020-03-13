import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Sort } from '@angular/material/sort';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-alcohols',
  templateUrl: './alcohols.component.html',
  styleUrls: ['./alcohols.component.css']
})
export class AlcoholsComponent implements OnInit {
  sortedData = [];

  constructor(private apiService: ApiService, public searchService: SearchService) {
    this.update = this.update.bind(this);
  }

  ngOnInit(): void {
    this.searchService.search().finally(() => this.update());
  }

  roundNumber(nbr) {
    nbr = nbr / 100;
    return Number.parseFloat(nbr).toFixed(2);
  }

  compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  update() {
    this.sortedData = this.searchService.alcohols;
  }

  sortData(sort: Sort) {
    const data = this.searchService.alcohols;//this.alcohols.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.Namn, b.Namn, isAsc);
        case 'volume': return this.compare(a.Volymiml, b.Volymiml, isAsc);
        case 'price': return this.compare(a.Prisinklmoms, b.Prisinklmoms, isAsc);
        case 'apk': return this.compare(Number(this.roundNumber((a.Volymiml * parseInt(a["Alkoholhalt"].split('%')[0])) / a.Prisinklmoms)),
          Number(this.roundNumber((b.Volymiml * parseInt(b["Alkoholhalt"].split('%')[0])) / b.Prisinklmoms)), isAsc);
        case 'ecological': return this.compare(a.Ekologisk, b.Ekologisk, isAsc);
        default: return 0;

      }
    });
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
