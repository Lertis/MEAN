import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  employee =  {
    'name': '',
    'position': '',
    'office': '',
    'salary': ''
  };

  constructor(private fb: FormBuilder) {
    this.employeeForm = fb.group({
      'name': [null, Validators.required],
      'position': [null, Validators.required],
      'office': [null, Validators.required],
      'salary': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {

  }

}
