import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarvelComponent } from './card-marvel.component';

describe('CardMarvelComponent', () => {
  let component: CardMarvelComponent;
  let fixture: ComponentFixture<CardMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMarvelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
