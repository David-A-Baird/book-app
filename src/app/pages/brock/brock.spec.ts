import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brock } from './brock';

describe('Brock', () => {
  let component: Brock;
  let fixture: ComponentFixture<Brock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brock],
    }).compileComponents();

    fixture = TestBed.createComponent(Brock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
