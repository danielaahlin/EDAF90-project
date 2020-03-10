import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[drink-host]',
})
export class DrinkTypeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}