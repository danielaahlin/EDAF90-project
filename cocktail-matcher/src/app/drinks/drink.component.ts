import { Component, Input } from '@angular/core';

@Component({
    template: `
    <h3>test</h3>
    `
})

export class DrinkComponent {
    @Input() data: any;
}