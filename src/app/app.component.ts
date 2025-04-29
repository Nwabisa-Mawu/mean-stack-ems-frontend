import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeesListComponent } from './components/employeelist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeesListComponent, MatToolbarModule],
  styles: [
    `
      main {
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;
      }
    `,
  ],
  template: `
    <mat-toolbar>
      <span>Employees Management System</span>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  title = 'client';
}
