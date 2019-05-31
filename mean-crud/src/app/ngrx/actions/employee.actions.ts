import { Action } from '@ngrx/store';
import { IEmployee } from '../../shared/model/employee';

export enum EmployeeTypes {
    SELECT_EMPLOYEE_TO_UPDATE = '[Employee] Select Employee To Update'
  }
  
  export class SelectEmployeeToUpdate implements Action {
    readonly type = EmployeeTypes.SELECT_EMPLOYEE_TO_UPDATE;
    constructor(public payload: IEmployee) {}
  };

  export type EmployeeActions = SelectEmployeeToUpdate;