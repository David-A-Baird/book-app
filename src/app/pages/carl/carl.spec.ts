import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carl } from './carl';

describe('Carl', () => {
  let component: Carl;
  let fixture: ComponentFixture<Carl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carl],
    }).compileComponents();

    fixture = TestBed.createComponent(Carl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
