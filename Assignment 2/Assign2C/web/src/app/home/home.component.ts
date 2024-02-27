import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: any[];
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Check if the user is logged in
    this.isLoggedIn = localStorage.getItem('auth-token') !== null;

    // If the user is logged in, fetch the users
    if (this.isLoggedIn) {
      this.userService.getUsers().subscribe(
        (data: any[]) => {
          this.users = data;
        },
        (error: any) => {
          console.error('Error fetching users:', error);
        }
      );
    }
  }
}
