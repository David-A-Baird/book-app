import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rio } from './rio';

describe('Rio', () => {
  let component: Rio;
  let fixture: ComponentFixture<Rio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rio],
    }).compileComponents();

    fixture = TestBed.createComponent(Rio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
