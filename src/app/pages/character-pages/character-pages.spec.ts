import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPages } from './character-pages';

describe('CharacterPages', () => {
  let component: CharacterPages;
  let fixture: ComponentFixture<CharacterPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterPages],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
