import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Luke } from './luke';

describe('Luke', () => {
  let component: Luke;
  let fixture: ComponentFixture<Luke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Luke],
    }).compileComponents();

    fixture = TestBed.createComponent(Luke);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
