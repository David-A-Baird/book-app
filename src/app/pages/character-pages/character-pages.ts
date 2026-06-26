import { Component } from '@angular/core';

@Component({
  selector: 'app-character-pages',
  imports: [],
  templateUrl: './character-pages.html',
  styleUrl: './character-pages.scss',
})

/** add variable to show the name of the character that is being looked at
 *  and to call their details from database
 */

export class CharacterPages {
  characterName: string;

  constructor() {
    this.characterName = this.getCharacterName();
  }

  getCharacterName(): string {
    // Logic to retrieve the character name from the database
    return 'Character Name';
  }
}
