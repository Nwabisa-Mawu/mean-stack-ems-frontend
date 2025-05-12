import { Component } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  template: `
    <app-auth-form [type]="type" (formSubmitted)="handleSignup($event)"></app-auth-form>
  `,
})
export class SignupServiceComponent {
    type = 'signup';
  constructor(private authService: AuthService) {}

  handleSignup(data:Event) {
    this.authService.register(data).subscribe({
      next: () => alert('Registration successful! Please login.'),
      error: (err) => {
        alert('Registration failed');
        console.error(err);
      },
    });
  }
}