import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `http://localhost:8080/auth`; 
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        // Store the token in local storage
        localStorage.setItem(this.tokenKey, response.token);
      })
    );
  }

  logout() {
    // Remove the token from local storage
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    // Retrieve the token from local storage
    return localStorage.getItem(this.tokenKey);
  }
}
