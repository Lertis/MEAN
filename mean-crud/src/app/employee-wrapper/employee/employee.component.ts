import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/employee.service';
import { IEmployee } from '../../shared/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  employee: IEmployee =  {
    _id: '5cf0f38fe23e7f01e481a7e1',
    name: '',
    position: '',
    office: '',
    salary: null
  };

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = fb.group({
      'name': [null, Validators.required],
      'position': [null, Validators.required],
      'office': [null, Validators.required],
      'salary': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.employee.name = '1';
    this.employee.position = '1';
    this.employee.office = '1';
    this.employee.salary = 1;
  }

  submit() {
    this.employeeService.addEmployee(this.employee).subscribe((result) => {
      console.log('Added!');
      console.log(result);
    })
    this.employeeForm.reset();
  }

}
