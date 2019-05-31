import { SelectedEmployeeState, SELECTED_EMPLOYEE_STATE } from './selected.employee.state';

export interface ApplicationState {
    selectedEmployee: SelectedEmployeeState
}
   
export const INITIAL_APPLICATION_STATE: ApplicationState = {
    selectedEmployee: SELECTED_EMPLOYEE_STATE
}