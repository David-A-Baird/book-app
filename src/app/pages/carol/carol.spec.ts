import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carol } from './carol';

describe('Carol', () => {
  let component: Carol;
  let fixture: ComponentFixture<Carol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carol],
    }).compileComponents();

    fixture = TestBed.createComponent(Carol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
