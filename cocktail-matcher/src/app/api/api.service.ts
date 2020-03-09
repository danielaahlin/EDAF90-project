import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, filter } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class ApiService {
  products: any = [];
  constructor(private httpClient: HttpClient) {}

  getCocktailByName(name: string) {
    return this.httpClient.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
    ).pipe(
      map(res => {
      return res;
    }));
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
      "../assets/systemet.json").pipe(
        map((res:any) => {
          return res.filter(item => item.Namn === name)
        })
      );
  }

  getAllIngredientInfo(artNumber: number) {
    return this.httpClient.get(
      "../assets/systemet.json").pipe(
        map((res:any) => {
          return res.filter(item => item.Artikelid === artNumber)
        })
      );
  }  
}
