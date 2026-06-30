import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: '<nav><a href="/">Home</a><a href="/about">About</a><a href="/books">Books</a><a href="/characters">Characters</a><a href="/updates">Updates</a></nav>',
  styleUrl: './header.scss',
})
export class Header {}
