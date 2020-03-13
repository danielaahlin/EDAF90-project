import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, timeout } from "rxjs/operators";

export interface sysArticle{
  "Volymiml": number,
  "Varugrupp": string,
  "Stil": string,
  "nr": number,
  "Argang": number,
  "Namn2": string,
  "Producent": string,
  "PrisPerLiter": number,
  "Forslutning": string,
  "Provadargang": string,
  "Sortiment": string,
  "Namn": string,
  "Forpackning": string,
  "Ekologisk": boolean,
  "Artikelid": number,
  "Leverantor": string,
  "Koscher": boolean,
  "Ursprunglandnamn": string,
  "Prisinklmoms": number,
  "Alkoholhalt": string,
  "Typ": string,
  "Etiskt": boolean,
  "Ursprung": string,
  "SortimentText": string,
  "Varnummer": number,
  "Saljstart": string,
  "Utgått": boolean
}

@Injectable({
  providedIn: "root"
})

export class ApiService {
  products: any = [];
  translation = {
    "rum" : "rom",
    "liqueur" : "lik�r",
    "whiskey" : "whisky"
  }
  private readonly sysAdress = "../assets/systemet.json";

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
    return this.httpClient.get(
      this.sysAdress).pipe(
        map((res:Array<sysArticle>) => {
          return res.filter(item => item.Namn.toLowerCase() === name.toLowerCase())
        })
      );
  }

  getIngredientByArticleNbr(artNumber: number) {
    return this.httpClient.get(
      this.sysAdress).pipe(
        map((res:Array<sysArticle>) => {
          return res.filter(item => item.Artikelid === artNumber)
        })
      );
  }
  
  getIngredientsByType(type: string){
    return this.httpClient.get(
      this.sysAdress).pipe(
        map((res:Array<sysArticle>) => {
          return res.filter(item => this.translateIncludes(item, type));
        })
      );
  }

  private translateIncludes(item: sysArticle, type: string) {
    let newType = type.toLowerCase();
    if(Object.keys(this.translation).includes(newType)){
      newType = this.translation[newType];
    }
    return item.Varugrupp.toLowerCase().includes(newType);
  }
}
