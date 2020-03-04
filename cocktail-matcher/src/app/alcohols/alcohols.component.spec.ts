import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholsComponent } from './alcohols.component';

describe('AlcoholsComponent', () => {
  let component: AlcoholsComponent;
  let fixture: ComponentFixture<AlcoholsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
