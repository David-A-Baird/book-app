import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tristan } from './tristan';

describe('Tristan', () => {
  let component: Tristan;
  let fixture: ComponentFixture<Tristan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tristan],
    }).compileComponents();

    fixture = TestBed.createComponent(Tristan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
