import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, EmptyError } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEmployee } from '../../shared/model/employee';
import { EmployeeService } from '../../shared/employee.service';

import { ApplicationState } from '../../ngrx/states/application.state';
import { SelectEmployeeToUpdate } from '../../ngrx/actions/employee.actions';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<IEmployee>;

  constructor(private employeeServce: EmployeeService, private router: Router, private store: Store<ApplicationState>) {
    this.employees$ = this.employeeServce.getEmployeeList().pipe(
      map((employees) => {
        return employees;
      })
    )
  }

  ngOnInit() {

  }

  update(employee: IEmployee) {
    this.store.dispatch(new SelectEmployeeToUpdate(employee));
    this.router.navigate(['update']);
  }

}
