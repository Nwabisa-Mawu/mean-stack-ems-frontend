import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employee-list/employeelist.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: EmployeesListComponent, canActivate: [AuthGuard], title: 'Employees List' },
  { path: 'new', component: AddEmployeeFormComponent, canActivate: [AuthGuard], title: 'Add Employee' },
  { path: 'edit/:id', component: EditEmployeeComponent, canActivate: [AuthGuard], title: 'Edit Employee' },
];
