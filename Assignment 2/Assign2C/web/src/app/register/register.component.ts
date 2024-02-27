import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { name, email, password } = this.registrationForm.value;
      console.log(this.registrationForm.value);

      // Call the authentication service to register the user
      this.authService.register({ name, email, password }).subscribe(
        response => {
          // Handle successful registration
          console.log('Registration successful:', response);
          alert('Registration successful! Please login.');
          this.router.navigate(['/login']);
        },
        error => {
          // Handle registration error
          console.error('Registration failed:', error);
        }
      );
    } else {
      // Form is invalid, mark fields as touched to display validation errors
      this.registrationForm.markAllAsTouched();
    }
  }
}
