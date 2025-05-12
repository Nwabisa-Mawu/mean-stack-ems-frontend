import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, effect } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../../services/client/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatButtonModule,],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnChanges {
  // The type of the input() is InputSignal<Employee> because we might pass async data into the form.
  @Input() initialState: Employee | null = null;

  @Output() formSubmitted = new EventEmitter<Employee>();

  employeeForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      position: ['', [Validators.required, Validators.minLength(5)]],
      level: ['junior', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
   if (changes['initialState'] && this.initialState) {
      this.employeeForm.patchValue({
        name: changes['initialState'].currentValue[0].name,
        position: changes['initialState'].currentValue[0].position,
        level: changes['initialState'].currentValue[0].level,
      });
    }
  }

  get name() {
    return this.employeeForm.get('name')!;
  }
  get position() {
    return this.employeeForm.get('position')!;
  }
  get level() {
    return this.employeeForm.get('level')!;
  }

  submitForm() {
    if (this.employeeForm.valid) {
      this.formSubmitted.emit(this.employeeForm.value as Employee);
    }
  }
}
