import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './model/employee';
import * as env from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<IEmployee> {
    return this.http.get<IEmployee>(env.environment.BASE_URL)
  }
}
