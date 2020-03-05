import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import systemet from "../api/systemet.json";

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

  getCocktailById(id: number) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
    );
  }

  getCocktailByIngredient(name: string) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name
    )
  }

  getIngredientByName(name: string) {
    //TODO use systemet and not cokctail
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?i" + name
    )
  }

  getAllIngedientInfo(artNumber) {
    //TODO use systemet
  }
}
