import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flair } from './flair';

describe('Flair', () => {
  let component: Flair;
  let fixture: ComponentFixture<Flair>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flair],
    }).compileComponents();

    fixture = TestBed.createComponent(Flair);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
