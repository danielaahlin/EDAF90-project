import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-alcohols',
  templateUrl: './alcohols.component.html',
  styleUrls: ['./alcohols.component.css']
})
export class AlcoholsComponent implements OnInit {
  alcohols = [];
  sortedData = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getIngredientsByType("Gin").subscribe(x => {
      x.forEach(alc => {
        this.alcohols.push(alc);
        console.log(alc);
        this.sortedData = this.alcohols.slice();
      });
    });
    console.log(this.alcohols);
  }

  roundNumber(nbr) {
    return Number.parseFloat(nbr).toFixed(2);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  sortData(sort: Sort) {
    const data = this.alcohols.slice();
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
        case 'apk': return this.compare(Number(this.roundNumber((a.Volymiml * a["Alkoholhalt"].split('%')[0]) / a.Prisinklmoms)),
          Number(this.roundNumber((b.Volymiml * b["Alkoholhalt"].split('%')[0]) / b.Prisinklmoms)), isAsc);
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
