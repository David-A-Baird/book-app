import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Robert } from './robert';

describe('Robert', () => {
  let component: Robert;
  let fixture: ComponentFixture<Robert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Robert],
    }).compileComponents();

    fixture = TestBed.createComponent(Robert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
