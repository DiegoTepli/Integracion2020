import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResumenVenta } from '../models/resumen-venta';

@Injectable({
  providedIn: 'root'
})
export class ResumenVentaService {

  selectedResumenVenta: ResumenVenta;
  resumenVentas: ResumenVenta[];
  
  readonly URL_API = 'http://localhost:3000/api/resumenVentas';

  constructor(private http: HttpClient) {
    this.selectedResumenVenta = new ResumenVenta();
  }

  postResumenVenta(resumenVenta: ResumenVenta) {
    return this.http.post(this.URL_API, resumenVenta);
  }

  getResumenVentas() {
    return this.http.get(this.URL_API);
  }

  putResumenVenta(resumenVenta: ResumenVenta) {
    return this.http.put(this.URL_API + `/${resumenVenta._idFactura}`, resumenVenta);
  }

  deleteResumenVenta(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}