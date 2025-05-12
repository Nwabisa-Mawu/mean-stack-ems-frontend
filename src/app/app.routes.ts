import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employee-list/employeelist.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { LoginServiceComponent } from './services/authentication/login.service';
import { SignupServiceComponent } from './services/authentication/signup.service';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: SignupServiceComponent },
  { path: 'login', component: LoginServiceComponent },
  { path: 'signup', component: SignupServiceComponent },
  { path: 'home', component: EmployeesListComponent, canActivate: [AuthGuard], title: 'Employees List' },
  { path: 'home/new', component: AddEmployeeFormComponent, canActivate: [AuthGuard], title: 'Add Employee' },
  { path: 'home/edit/:id', component: EditEmployeeComponent, canActivate: [AuthGuard], title: 'Edit Employee' },
];
