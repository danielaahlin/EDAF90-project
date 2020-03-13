import { ApiService } from "../api/api.service";
import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  @Input() redirect: string[];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private router: Router, public searchService: SearchService) { }

  add(input): void {
    const { value } = input;

    if ((value || '').trim()) {
      this.searchService.addTag(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    this.searchService.removeTag(tag);
  }

  searchOrAdd(event) {
    if (event.currentTarget.value)
      this.add(event.currentTarget)
    else
      this.search()
  }

  onSubmit(event) {
    event.preventDefualt();
    this.search();
  }

  search(): void {
    this.searchService.search();
    this.router.navigate(this.redirect);
  }

  ngOnInit(): void {
  }

}
