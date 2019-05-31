import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmployeeComponent } from './update-employee.component';

const frameworks: Routes = [
  { path: '', component: UpdateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(frameworks)],
  exports: [RouterModule]
})
export class UpdateEmployeeRoutingModule {}
