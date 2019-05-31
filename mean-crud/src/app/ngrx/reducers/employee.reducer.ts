import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import { SelectedEmployeeState } from '../states/selected.employee.state';
import { EmployeeActions, EmployeeTypes } from '../actions/employee.actions';
import { ApplicationState } from '../states/application.state';


const initialSelectedEmployeeState: SelectedEmployeeState = {
    selectedEmployee: null
}

export function selectedEmployeeReducer(employeeState: SelectedEmployeeState = initialSelectedEmployeeState, action: EmployeeActions): SelectedEmployeeState {
    switch (action.type) {
        case EmployeeTypes.SELECT_EMPLOYEE_TO_UPDATE:
            employeeState.selectedEmployee = action.payload;
            return { ...employeeState };

        default:
            return {...employeeState};
    }
}

const getSelectedEmployee = createFeatureSelector<ApplicationState, SelectedEmployeeState>('selectedEmployee');

export const getEmployee = createSelector(getSelectedEmployee, state => state.selectedEmployee);

export const allReducers: ActionReducerMap<ApplicationState> = {
    selectedEmployee: selectedEmployeeReducer
}