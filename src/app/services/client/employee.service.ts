import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

export interface Employee {
  name: string;
  position: string;
  level: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private apiUrl = 'http://localhost:5200/api/employees';
   /**
    * **signal** is an angular 16+ feature that allows us to create a reactive variable.
    * It is similar to BehaviorSubject in RxJS, but it is more lightweight and easier to use.
    * Because signals are reactive, our application’s view will update 
    * when they are updated, and other signals that depend on this signal will update as well.
    */
   employees$ = signal<Employee[]>([]);
    employee$ = signal<Employee>({} as Employee);

  constructor(private httpClient:HttpClient) { }

   private refreshEmployees() {
    this.httpClient.get<Employee[]>(this.apiUrl).subscribe(employees => {
      this.employees$.set(employees);
    });
  }

  getEmployees() {
    this.refreshEmployees();
    return this.employees$();
  }

  getEmployee(id: string) {
    this.httpClient.get<Employee>(`${this.apiUrl}/${id}`).subscribe(employee => {
      this.employee$.set(employee);
    });
    return this.employee$(); // 🛠️ fixed: move `return` outside `.subscribe`
  }

  createEmployee(employee: Employee) {
    return this.httpClient.post(`${this.apiUrl}`, employee, { responseType: 'text' });
  }

  updateEmployee(id: string, employee: Employee) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, employee, { responseType: 'text' });
  }

  deleteEmployee(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
