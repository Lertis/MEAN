import { IEmployee } from '../../shared/model/employee';

export interface SelectedEmployeeState {
    selectedEmployee: IEmployee
}

export const SELECTED_EMPLOYEE_STATE: SelectedEmployeeState = {
    selectedEmployee: null
}