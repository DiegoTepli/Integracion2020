import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Listemployee } from '../models/listemployee';

@Injectable({
  providedIn: 'root'
})
export class listemployeeService {

  selectedlistEmployee: Listemployee;
  listemployees: Listemployee[];
  
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedlistEmployee = new Listemployee();
  }

  postEmployee(listemployee: Listemployee) {
    return this.http.post(this.URL_API, listemployee);
  }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  putEmployee(listemployee: Listemployee) {
    return this.http.put(this.URL_API + `/${listemployee.id}`, listemployee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
}