import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathLocationStrategy, Location } from '@angular/common';
import { IEmployee } from '../shared/model/employee';
import { ApplicationState } from '../ngrx/states/application.state';
import { Store } from '@ngrx/store';
import { SelectedEmployeeState } from '../ngrx/states/selected.employee.state';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeToUpdate: IEmployee;
  constructor(
    private store: Store<ApplicationState>,
    private location: Location, 
    private employeeService: EmployeeService,
    private router: Router) {
    this.store.select('selectedEmployee').subscribe((employee: SelectedEmployeeState) => {
      this.employeeToUpdate = employee.selectedEmployee;
    })
  }

  ngOnInit() {
    
  }

  update() {
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe((result) => {
      console.log('Updated!');
      console.log(result);
    })
    this.router.navigate(['employees']);
  }

  delete() {
    this.employeeService.deleteEmployee(this.employeeToUpdate).subscribe((result) => {
      console.log('Deleted!');
      console.log(result);
    })
    this.router.navigate(['employees']);
  }

  cancel() {
    this.location.back();
  }
}
