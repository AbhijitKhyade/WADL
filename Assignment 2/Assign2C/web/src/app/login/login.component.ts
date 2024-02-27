import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router,) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response: any) => {
          // Handle successful login
          console.log('Login successful:', response);
          alert('Login successful!');
          this.router.navigate(['']);
        },
        (error: any) => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
    } else {
      // Form is invalid, mark fields as touched to display validation errors
      this.loginForm.markAllAsTouched();
    }
  }
}
