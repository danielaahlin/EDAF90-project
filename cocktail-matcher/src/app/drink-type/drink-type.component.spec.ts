import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkTypeComponent } from './drink-type.component';

describe('DrinkTypeComponent', () => {
  let component: DrinkTypeComponent;
  let fixture: ComponentFixture<DrinkTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
