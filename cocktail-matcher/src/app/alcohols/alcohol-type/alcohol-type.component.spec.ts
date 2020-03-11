import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholTypeComponent } from './alcohol-type.component';

describe('AlcoholTypeComponent', () => {
  let component: AlcoholTypeComponent;
  let fixture: ComponentFixture<AlcoholTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
