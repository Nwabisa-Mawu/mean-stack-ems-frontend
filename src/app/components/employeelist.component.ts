import { Component, OnInit, WritableSignal } from '@angular/core';
import { Employee } from '../services/employee.service';
import { EmployeeService } from '../services/employee.service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-employees-list',
    standalone: true,
    imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employeelist.component.css'],
})
export class EmployeesListComponent  implements OnInit {
    employees$ = {} as WritableSignal<Employee[]>;
    displayedColumns: string[] = [
        'col-name',
        'col-position',
        'col-level',
        'col-action',
    ];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
    this.fetchEmployees();
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => this.fetchEmployees(),
    });
  }

  private fetchEmployees(): void {
    this.employees$ = this.employeeService.employees$;
    this.employeeService.getEmployees();
  }

}