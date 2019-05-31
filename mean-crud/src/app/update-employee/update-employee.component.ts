import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathLocationStrategy } from '@angular/common';
import { IEmployee } from '../shared/model/employee';
import { ApplicationState } from '../ngrx/states/application.state';
import { Store } from '@ngrx/store';
import { SelectedEmployeeState } from '../ngrx/states/selected.employee.state';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeToUpdate: IEmployee;
  constructor(private store: Store<ApplicationState>) {
    this.store.select('selectedEmployee').subscribe((employee: SelectedEmployeeState) => {
      this.employeeToUpdate = employee.selectedEmployee;
    })
  }

  ngOnInit() {
    console.log(this.employeeToUpdate)
  }

  update() {

  }

  cancel() {

  }
}
