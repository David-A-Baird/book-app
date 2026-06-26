import { Routes } from '@angular/router';
import { CharacterPages } from './character-pages/character-pages';
import { Characters } from './characters/characters';
import { Updates } from './updates/updates';
import { About } from './about/about';
import { Books } from './books/books';

export const routes: Routes = [
  { path: 'character', component: CharacterPages },
  { path: 'characters', component: Characters },
  { path: 'books', component: Books },
  { path: 'updates', component: Updates },
  { path: 'about-the-author', component: About },
];
