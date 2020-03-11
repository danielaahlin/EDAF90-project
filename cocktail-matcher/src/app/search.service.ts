import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  tags: string[] = [];

  constructor() { }

  addTag(tag: string) {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag)
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter(v => tag != v)
  }
}
