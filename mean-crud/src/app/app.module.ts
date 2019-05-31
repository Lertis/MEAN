import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular.material.module';

import { EmployeeService } from './shared/employee.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-wrapper/employee-list/employee-list.component';
import { EmployeeComponent } from './employee-wrapper/employee/employee.component';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';
import { allReducers } from './ngrx/reducers/employee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NotFoundComponent,
    EmployeeWrapperComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    StoreModule.forRoot(allReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }