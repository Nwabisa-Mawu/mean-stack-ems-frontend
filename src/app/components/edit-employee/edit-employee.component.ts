import { Component, OnInit, WritableSignal } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../services/client/employee.service';
import { EmployeeService } from '../../services/client/employee.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [EmployeeFormComponent, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Edit an Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-employee-form
          [initialState]="employee()"
          (formSubmitted)="editEmployee($event)"
        ></app-employee-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class EditEmployeeComponent {

  employee = {} as WritableSignal<Employee>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }

    this.employeeService.getEmployee(id!);
    this.employee = this.employeeService.employee$;
  }

  editEmployee(employee: Employee) {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.employeeService.updateEmployee(id, employee).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        alert('Failed to update employee');
        console.error(error);
      },
    });
  }
  
}
