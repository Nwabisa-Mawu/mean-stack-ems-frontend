import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [ MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: any;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  }

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
  }
}

