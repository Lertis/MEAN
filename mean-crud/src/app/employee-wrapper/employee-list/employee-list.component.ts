import { Component, OnInit } from '@angular/core';
import { Observable, EmptyError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from '../../shared/model/employee';
import { EmployeeService } from '../../shared/employee.service';
import { Router  } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<IEmployee>;

  constructor(private employeeServce: EmployeeService, private router: Router) {
    this.employees$ = this.employeeServce.getEmployeeList().pipe(
      map((employees) => {
        return employees;
      })
    )
  }

  ngOnInit() {

  }

  update(employee: IEmployee) {
    this.router.navigate(['update'], { queryParams: {
      updateEmp: employee
    }});
  }

  delete(employee: IEmployee) {
    console.log(employee)
  }

}
