import { Routes } from '@angular/router';
import { CharacterPages } from './pages/character-pages/character-pages';
import { Updates } from './pages/updates/updates';
import { About } from './pages/about/about';
import { Books } from './pages/books/books';
import { WorldMap } from './pages/world-map/world-map';

export const routes: Routes = [
  { path: 'character', component: CharacterPages },
  { path: 'books', component: Books },
  { path: 'updates', component: Updates },
  { path: 'world', component: WorldMap },
  { path: 'about-the-author', component: About },
];
