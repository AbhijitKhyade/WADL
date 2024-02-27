import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  // Check if authentication token exists in local storage
  isAuthenticated(): boolean {
    return !!this.authService.getToken();
  }

  // Logout user
  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']); // Navigate to login page after logout
  }
}
