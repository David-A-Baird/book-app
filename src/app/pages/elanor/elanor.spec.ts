import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elanor } from './elanor';

describe('Elanor', () => {
  let component: Elanor;
  let fixture: ComponentFixture<Elanor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elanor],
    }).compileComponents();

    fixture = TestBed.createComponent(Elanor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
