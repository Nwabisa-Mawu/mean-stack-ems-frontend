import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employeelist.component';

export const routes: Routes = [
  { path: '', component: EmployeesListComponent, title: 'Employees List' },
];
