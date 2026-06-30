import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celestia } from './celestia';

describe('Celestia', () => {
  let component: Celestia;
  let fixture: ComponentFixture<Celestia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Celestia],
    }).compileComponents();

    fixture = TestBed.createComponent(Celestia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
