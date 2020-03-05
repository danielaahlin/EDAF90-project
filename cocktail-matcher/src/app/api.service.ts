import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getCocktailById() {
    let items = [];

    items.push(
      this.httpClient.get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"
      )
    );

    items.push(
      this.httpClient.get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11006"
      )
    );
    return items;
  }
}
