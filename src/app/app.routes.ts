import { Routes } from '@angular/router';
import { CharacterPages } from './pages/character-pages/character-pages';
import { Updates } from './pages/updates/updates';
import { About } from './pages/about/about';
import { Books } from './pages/books/books';

export const routes: Routes = [
  { path: 'character', component: CharacterPages },
  { path: 'books', component: Books },
  { path: 'updates', component: Updates },
  { path: 'about-the-author', component: About },
];
