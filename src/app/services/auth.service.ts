import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = 'http://localhost:5200/api/auth';

    constructor(private http: HttpClient, private router: Router) { }

    register(user: any) {
        return this.http.post(`${this.baseUrl}/register`, user);
    }

    login(user: any) {
        return this.http.post<{ token: string }>(`${this.baseUrl}/login`, user).subscribe({
            next: (res) => {
                localStorage.setItem('token', res.token);
                this.router.navigate(['/']);
            },
            error: (err) => {
                alert('Login failed');
                console.error(err);
            },
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}