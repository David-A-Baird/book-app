import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digit } from './digit';

describe('Digit', () => {
  let component: Digit;
  let fixture: ComponentFixture<Digit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Digit],
    }).compileComponents();

    fixture = TestBed.createComponent(Digit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
