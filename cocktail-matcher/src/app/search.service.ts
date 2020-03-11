import { Injectable } from '@angular/core';
import { ApiService } from "./api/api.service";
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  tags: string[] = [];
  drinks: string[] = [];
  searching: boolean = false;

  constructor(private apiService: ApiService) { }

  addTag(tag: string) {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag.toLowerCase())
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter(v => tag != v)
  }

  async search() {
    this.searching = true;
    this.drinks = [];
    await this.searchByName();
    await this.searchByIngredient();
    this.searching = false;
    console.log(this.drinks);
  }

  async searchByIngredient() {
    await Promise.all(this.tags.map( t => {
      this.apiService.getCocktailByIngredient(t).pipe(
        tap(res => {
          if(res) {
            res['drinks'].forEach(drink => this.drinks.push(drink))
          }
        }), first()
      ).toPromise()
    }));
  }

  async searchByName() {
    const filter = (this.tags.length == 0)
      ? (_) => true
      : (d) => (this.tags.some(t => d.strDrink.toLowerCase().includes(t)));

    const letters = (this.tags.length == 0)
      ? 'abcdefghijklmnopqrstuvxyz0123456789'.split("")
      : Array.from(new Set(this.tags.map(t => t[0])));

    await Promise.all(letters.map(letter => {
      this.apiService.getCocktailByfirstLetter(letter).pipe(
        tap(res => {
          if(res["drinks"]){
            res["drinks"].forEach(drink => {
              if (filter(drink))
                this.drinks.push(drink);
            });
          }
        }), first()).toPromise();
    }));
  }
}
