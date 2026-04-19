export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

export interface CharacterGroup {
  characters: Character[];
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `

  <h1>Create a Character</h1>
  <p>Complete the form below to create a new character, or group of characters.</p>

  <div class="character-form-container">
    <form class="character-form" #characterForm="ngForm" (ngSubmit) = "addToCharacterGroup()">
      <fieldset>
        <legend><h2>My Character</h2></legend>

        <label for="characterName">Character's Name</label>
        <input type ="text" id="name" class="name-input" name="name" [(ngModel)]="name" required>

        <label for="gender">Character's Gender</label>
        <select name="gender" id="gender" [(ngModel)]="selectedGender" required>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Other">Other</option>
        </select>

        <label for="class">Character's Class</label>
        <select name="class" id="class" [(ngModel)]="selectedClass" required>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
          <option value="Healer">Healer</option>
        </select>

        <input type="submit" value="Add to Character Group" />
      </fieldset>
    </form>
  </div>

  <div class="character-summary-container">
    <h2>Character Group</h2>

    <div class="formError">
      @if (errorMessage) {
        <p>{{ errorMessage }}</p>
          }
    </div>

    @if (characterGroup.characters.length > 0) {
      <ul> @for (character of characterGroup.characters; track character) {
        <li>
          <strong>{{ character.name }}</strong>
          <br />
          <strong>Gender:</strong> {{ character.gender }}
          <br />
          <strong>Class:</strong> {{ character.class }}
        </li>
      }
      </ul>
    } @else {
      <p>No characters added to the group yet.</p>
    }

  </div>

  `,
  styles: [ `

    main {
      max-width: 90%;
      margin: 0 auto;
    }

    h2 {
      color: #5FBD56;
      text-shadow: 2px 1px 1px #133610;
    }

    p {
      margin: 0 auto;
    }

    .character-form-container {
      max-width: 60%;
      margin: 0 auto;
      margin-top: 25px;
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
      background-color: #e5e9e2;
      box-shadow: 10px 10px 10px #0d0314;
      padding: 0px 13px 13px 20px;
      border: 2px solid #0d0314;
      border-radius: 20px;
    }

    .character-summary-container {
      max-width: 60%;
      margin: 0 auto;
      margin-top: 25px;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #e5e9e2;
      box-shadow: 10px 10px 10px #0d0314;
      padding: 0px 13px 13px 20px;
      border: 2px solid #0d0314;
      border-radius: 20px;
    }

    .character-summary-container li, .character-summary-container p {
      font-family: 'Exo 2', sans-serif;
      font-size: 1.2em;
      color: #180825;
      padding-top: 10px;
      padding-bottom: 10px;
    }


    .character-summary-container ul {
      list-style-type: none;
    }

    fieldset {
      border: none;
    }

    label {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
      font-family: 'Exo 2', sans-serif;
      font-size: 1.2em;
      color: #180825;
    }

    input[type="text"], select {
      width: 85%;
      font-family: 'Exo 2', sans-serif;
      font-size: 1.2em;
      color: #180825;
      border: 2px solid #0d0314;
      border-radius: 20px;
      padding: 5px 15px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      display: block;
      margin: 20px 0px 10px;
      font-family: 'Silkscreen', san-serif;
      text-shadow: 1px 1px 2px #133610;
      font-size: 1.2em;
      background-color: #5FBD56;
      color: #180825;
      padding: 8px 15px;
      border: 2px solid #5FBD56;
      border-radius: 20px;
      box-shadow: 2px 5px 5px #133610;
    }

    .formError {
      min-height: 1.5em;
    }

    .formError p {
      color: #db1b15;
    }

  `

  ]
})

export class CreateCharacterComponent {
  characterGroup: CharacterGroup = {
    characters: []
  };
  name: string = '';
  selectedGender: string = '';
  selectedClass: string = '';
  errorMessage: string = '';

  constructor() {}

  addToCharacterGroup() {
    // Don't submit form if missing required fields & display error message
    if (!this.name || !this.selectedGender || !this.selectedClass) {
      this.errorMessage = "Uh oh! You can't create a character with missing characteristics!";
      return;
    }

    this.errorMessage = '';

    // Generate a random ID between 1-1000, no decimals
    const characterId= Math.floor(Math.random() * 1000) + 1;

    const newCharacter: Character = {
      id: characterId,
      name: this.name,
      gender: this.selectedGender,
      class: this.selectedClass
    };

    this.characterGroup.characters.push(newCharacter);
    console.log('Character added:', newCharacter);

    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.selectedGender = '';
    this.selectedClass = '';
  }

}

