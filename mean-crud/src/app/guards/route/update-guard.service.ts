import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from '../../ngrx/states/application.state';
import { SelectedEmployeeState } from '../../ngrx/states/selected.employee.state';
import { IEmployee } from '../../shared/model/employee';


@Injectable({
  providedIn: 'root'
})
export class UpdateGuardService implements CanActivate {

  constructor(private store: Store<ApplicationState>, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let selectedEmployee: IEmployee;
    this.store.select('selectedEmployee').subscribe((selectedEmployeeState: SelectedEmployeeState) => {
      selectedEmployee = selectedEmployeeState.selectedEmployee;
    })

    if (!selectedEmployee ||
      selectedEmployee === null ||
      typeof (selectedEmployee) === (undefined || null)) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
