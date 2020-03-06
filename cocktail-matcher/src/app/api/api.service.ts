import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getCocktailByName(name: string) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
    );
  }

  getCocktailByfirstLetter(letter: string) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter
    );
  }

  getCocktailById(id: number) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
    );
  }

  getCocktailByIngredient(name: string) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name
    );
  }

  getIngredientByName(name: string) {
    //TODO use systemet and not cokctail
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?i" + name
    );
  }

  getAllIngedientInfo(artNumber: number) {
    return this.httpClient.get("../assets/systemet.json").pipe(
      map(res => {
        res = Object.values(res).filter(data => data.ArtikelId === artNumber);
        return res;
      })
    );
  }
}
