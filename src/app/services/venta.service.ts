import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  selectedVenta: Venta;
  ventas: Venta[];
  
  readonly URL_API = 'http://localhost:3000/api/ventas';

  constructor(private http: HttpClient) {
    this.selectedVenta = new Venta();
  }

  postVenta(venta: Venta) {
    return this.http.post(this.URL_API, venta);
  }

  getVentas() {
    return this.http.get(this.URL_API);
  }

  putVenta(venta: Venta) {
    return this.http.put(this.URL_API + `/${venta._id}`, venta);
  }

  deleteVenta(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}