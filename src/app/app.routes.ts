import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employee-list/employeelist.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';

export const routes: Routes = [
  { path: '', component: EmployeesListComponent, title: 'Employees List' },
  { path: 'new', component: AddEmployeeFormComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
];
