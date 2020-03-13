import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { ApiService, sysArticle } from '../../api/api.service';

@Component({
  selector: 'app-alcohol-type',
  templateUrl: './alcohol-type.component.html',
  styleUrls: ['./alcohol-type.component.css']
})
export class AlcoholTypeComponent implements OnInit {

  alcohol : sysArticle;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let idSplit = window.location.href.split('/');
    let id = idSplit[idSplit.length - 1];

    this.apiService.getIngredientByArticleNbr(Number(id)).subscribe(x => {
      this.alcohol = x[0];
    });
  }

}
