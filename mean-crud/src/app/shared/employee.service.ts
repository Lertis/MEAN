import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './model/employee';
import * as env from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
  });
    
  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<IEmployee> {
    return this.http.get<IEmployee>(env.environment.BASE_URL, { headers: this.headers})
  }

  addEmployee(employee: IEmployee) {
    return this.http.post(env.environment.BASE_URL, employee, { headers: this.headers});
  }

  updateEmployee(employee: IEmployee) {
    return this.http.put(env.environment.BASE_URL + `/${employee._id}`, employee, { headers: this.headers});
  }

  deleteEmployee(employee: IEmployee) {
    return this.http.delete(env.environment.BASE_URL + `/${employee._id}`, { headers: this.headers});
  }
}
