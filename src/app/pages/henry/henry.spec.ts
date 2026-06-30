import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Henry } from './henry';

describe('Henry', () => {
  let component: Henry;
  let fixture: ComponentFixture<Henry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Henry],
    }).compileComponents();

    fixture = TestBed.createComponent(Henry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
