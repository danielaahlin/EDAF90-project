import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api/api.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllIngedientInfo(1).subscribe(res => {
      console.log(res)
    })
  }

}
