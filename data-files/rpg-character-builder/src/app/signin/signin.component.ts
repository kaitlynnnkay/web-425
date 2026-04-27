import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="signin-form-container">
    <form [formGroup]="signinForm" (ngSubmit)="signin();" class="signinform">
      <h2>Complete the form below to sign in</h2>

      <fieldset>

      <legend>User Sign In</legend>

      <label for="email">Email</label>
      <input formControlName="email" type="email" id="email" name="email">
      @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('required')) {
        <small class="error">Email is required.</small>
      }

      @if (signinForm.controls['email'].touched && signinForm.controls['email'].hasError('email')) {
        <small class="error">Invalid email address.</small>
      }

      <label for="password">Password</label>
      <input formControlName="password" id="password" type="password">
      @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('required')) {
        <small class="error">Password is required.</small>
      }

      @if (signinForm.controls['password'].touched && signinForm.controls['password'].hasError('pattern')) {
        <small class="error">Password must be at least 8 characters long and contain at least one uppercase letter and one number.</small>
      }

      <input type="submit" [disabled]="!signinForm.valid" value="Sign In">
      </fieldset>
    </form>
  </div>
  `,
  styles: `
  main {
      max-width: 90%;
      margin: 0 auto;
  }

  h2 {
    color: #5FBD56;
    text-shadow: 2px 1px 1px #133610;
  }

  legend {
    font-family: 'Exo 2', sans-serif;
    font-size: 1.2em;
    color: #180825;
  }

  p {
    margin: 0 auto;
  }

  .signin-form-container {
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

  input[type="email"], input[type="password"] {
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

  .error {
    color: #db1b15;
    font-family: 'Exo 2', sans-serif;
    display: block;
    padding-bottom: 10px;
  }

  `
})

export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)])]
  });

  constructor( private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if (this.authService.signin(email, password)) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
