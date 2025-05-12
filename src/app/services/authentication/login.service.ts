import { Component } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, AuthFormComponent],
  template: `
    <app-auth-form [type]="type" (formSubmitted)="handleLogin($event)"></app-auth-form>
  `,
})
export class LoginServiceComponent {
    type = 'login';
  constructor(private authService: AuthService) {}

  handleLogin(credentials: Event) {
    this.authService.login(credentials);
  }
}