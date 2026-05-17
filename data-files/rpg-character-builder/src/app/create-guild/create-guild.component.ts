import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template:
  `
    <h1>Create a Guild</h1>
    <div class="create-guild-form-container">
      <form [formGroup]="createGuildForm" class="create-guild-form" (ngSubmit)="createGuild();">
        <fieldset>

          <legend>Create a Guild Form</legend>

          <div class="form-question-container">
          <label>Guild Name:</label>
            <input type="text" formControlName="name"><br />
          </div>

          <div class="form-question-container">
          <label>Guild Description:</label>
            <textarea rows="6" formControlName="description"></textarea><br />
          </div>

          <div class="form-question-container">
          <label>Guild Type:</label>
            <select formControlName="type">
              @for(option of typeOptions; track option) {
                <option [value]="option">{{ option }}</option>
              }
            </select>
          </div>

          <div class="form-question-container">
          <label>Notification Preferences:</label>
            <label><input type="radio" formControlName="preferences" value="email">Email</label>
            <label><input type="radio" formControlName="preferences" value="sms">SMS</label>
            <label><input type="radio" formControlName="preferences" value="in-app">In App</label>
          </div>

          <div class="form-question-container">
          <label>
            <input type="checkbox" formControlName="terms">
            Do You Accept Our Terms & Conditions?
          </label>
          </div>


          <div class="formError">
            @if (errorMessage) {
              <p>{{ errorMessage }}</p>
            }
          </div>

          <input type="submit" value="Create Guild">
        </fieldset>
      </form>
    </div>

    <div class="guilds">
      <h1>Guilds</h1>
      <div class="guild-card-container">
        @for(guild of preexistingGuilds; track guild) {
          <div class="guild-card">
            <h2>{{ guild.name }}</h2>
            <p><strong>Description:</strong><br />
            {{ guild.description }}</p>
            <p><strong>Type of Guild:</strong><br />
            {{ guild.type }}</p>
          </div>
        }
        </div>
    </div>
  `,
  styles:
  `
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

  fieldset {
      border: none;
    }

  legend {
    display: none;
  }

  label {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.2em;
    color: #180825;
  }

  .create-guild-form-container {
    max-width: 70%;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    background-color: #e5e9e2;
    box-shadow: 10px 10px 10px #0d0314;
    padding: 0px 13px 13px 20px;
    border: 2px solid #0d0314;
    border-radius: 20px;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.2em;
    color: #180825;
  }

  .create-guild-form {
    width: 50%;
  }

  .form-question-container {
    padding-top: 10px;
  }

  .guild-card-container {
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    justify-content: center;
    margin: 0 auto;
}

  .guild-card {
    flex: 0 1 calc(33.333% - 20px);
    margin: 10px;
    background-color: #e5e9e2;
    box-shadow: 5px 20px 20px #0d0314;
    padding: 0px 13px 13px 13px;
    max-width: 45vh;
    border: 2px solid #0d0314;
    border-radius: 20px;
  }

  .guild-card-container h2 {
      text-shadow: 2px 1px 1px #133610;
    }

  .guild-card p {
    font-family: 'Exo 2', sans-serif;
    font-size: 1.2em;
    color: #180825;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  input[type="text"], select, textarea {
      width: 100%;
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
      margin: 20px auto 10px;
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
      padding-top: 10px;
    }

    .formError p {
      color: #db1b15;
    }

  `
})

export class CreateGuildComponent {

  typeOptions = ['Competitive', 'Casual', 'Social', 'Educational'];
  errorMessage: string = '';

  preexistingGuilds = [
    { name: 'Waffle House', description: 'Silly little space waffles', type: 'Competitive'},
    { name: 'Pancake Party', description: 'Silly little space pancakes', type: 'Casual'},
    { name: 'Cereal Co-op', description: 'Silly little space cereal', type: 'Educational'}
  ];

  createGuildForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.createGuildForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      preferences: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  createGuild() {

    const { name, description, type, preferences, terms } = this.createGuildForm.value;

    // Don't submit form if missing required fields & display error message
    if (!name || !description || !type || !preferences) {
      this.errorMessage = "Uh oh! You can't create a guild until all fields are completed.";
      return;
    }

    // Don't submit form if the terms are not accepted
    if (!terms) {
      this.errorMessage = "Uh oh! You must accepts our terms & conditions to create a guild.";
      return;
    }

    this.errorMessage = '';

    const newGuild = {
      name: this.createGuildForm.value.name,
      description: this.createGuildForm.value.description,
      type: this.createGuildForm.value.type,
      preferences: this.createGuildForm.value.preferences,
      terms: this.createGuildForm.value.terms
    };

    this.preexistingGuilds.push(newGuild);

    console.log('New guild added:', newGuild);

    this.createGuildForm.reset();
  }
}
