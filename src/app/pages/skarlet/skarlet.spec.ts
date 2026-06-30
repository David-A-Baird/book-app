import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skarlet } from './skarlet';

describe('Skarlet', () => {
  let component: Skarlet;
  let fixture: ComponentFixture<Skarlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skarlet],
    }).compileComponents();

    fixture = TestBed.createComponent(Skarlet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
