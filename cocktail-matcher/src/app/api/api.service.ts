import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?i" + name
    )
  }

  getIngredientbyId(id: number) {
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=" + id;
  }
}
