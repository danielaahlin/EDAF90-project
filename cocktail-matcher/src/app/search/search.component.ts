import { ApiService } from "../api/api.service";
import { Component, OnInit, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  @Input() redirect: string;
  @Input() showButton: boolean;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private apiService: ApiService, private searchService: SearchService) { }

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
    //const index = this.tags.indexOf(tag);

    //if (index >= 0) {
    //  this.tags.splice(index, 1);
    //}
  }

  searchOrAdd(event) {
    if (event.currentTarget.value)
      this.add(event.currentTarget)
    else
      this.search(event.currentTarget.value)
  }

  search(value: string): void {
    console.log("wow" + value)
  }

  ngOnInit(): void {
  }

}
