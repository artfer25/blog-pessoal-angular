import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface UserRegister {
  name: string;
  username: string;
  password: string;
  email?: string;
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/api/auth';

  constructor(private http: HttpClient) {}

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, authRequest);
  }


  register(user: UserRegister): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }


  testarBackend(): Observable<any> {
    console.log(this.apiUrl);
    return this.http.get(environment.apiUrl + '/api/users');
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  
  clearToken(): void {
    localStorage.removeItem('authToken');
  }

  
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }


  logout(): void {
    this.clearToken();
 
  }


  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
