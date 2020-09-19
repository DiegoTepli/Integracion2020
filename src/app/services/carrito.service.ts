import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  selectedCarrito: Carrito;
  carritos: Carrito[];
  
  readonly URL_API = 'http://localhost:3000/api/carritos';

  constructor(private http: HttpClient) {
    this.selectedCarrito = new Carrito();
  }

  postCarrito(carrito: Carrito) {
    return this.http.post(this.URL_API, carrito);
  }

  getCarritos() {
    return this.http.get(this.URL_API);
  }

  putCarrito(carrito: Carrito) {
    return this.http.put(this.URL_API + `/${carrito._id}`, carrito);
  }

  deleteCarrito(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}