import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateGuardService } from './guards/route/update-guard.service';

const routes: Routes = [
  { path: 'employees', component: EmployeeWrapperComponent },
  { path: 'update', loadChildren: '../app/update-employee/update-employee.module#EmployeeUpdateModule', canActivate: [ UpdateGuardService ] },
  { path: '',   redirectTo: '/employees', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
