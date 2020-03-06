import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-drink-type',
  templateUrl: './drink-type.component.html',
  styleUrls: ['./drink-type.component.css']
})

@Injectable()
export class DrinkTypeComponent implements OnInit {
  
  constructor(private drink: Object) { }

  ngOnInit(): void {
    console.log(this.drink);
  }

}
