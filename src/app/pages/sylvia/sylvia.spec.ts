import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sylvia } from './sylvia';

describe('Sylvia', () => {
  let component: Sylvia;
  let fixture: ComponentFixture<Sylvia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sylvia],
    }).compileComponents();

    fixture = TestBed.createComponent(Sylvia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
