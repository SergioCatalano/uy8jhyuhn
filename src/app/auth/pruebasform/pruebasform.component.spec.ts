import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasformComponent } from './pruebasform.component';

describe('PruebasformComponent', () => {
  let component: PruebasformComponent;
  let fixture: ComponentFixture<PruebasformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
