import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathLocationStrategy } from '@angular/common';
import { IEmployee } from '../shared/model/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeToUpdate: IEmployee;
  constructor() {
  }

  ngOnInit() {
  }

  update() {

  }

  cancel() {

  }
}
