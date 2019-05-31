import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee.component';
import { AngularMaterialModule } from '../angular.material.module';
import { UpdateEmployeeRoutingModule } from './update-employee.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UpdateEmployeeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class EmployeeUpdateModule { }
