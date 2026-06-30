import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oreo } from './oreo';

describe('Oreo', () => {
  let component: Oreo;
  let fixture: ComponentFixture<Oreo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oreo],
    }).compileComponents();

    fixture = TestBed.createComponent(Oreo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
