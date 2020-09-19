import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service'; 
import { NgForm } from '@angular/forms';
import { Carrito } from 'src/app/models/carrito';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-carritos',
  templateUrl: './carritos.component.html',
  styleUrls: ['./carritos.component.css'],
  providers: [CarritoService]
})
export class CarritosComponent implements OnInit {
  
  alert:boolean=false

  constructor(public productService: ProductService, public carritoService: CarritoService) { }
  searchprod = '';
  searchventaprod = '';
  ngOnInit(): void {
    this.getProducts();

  }
  /*saveCarrito(product: Product){
    
      localStorage.setItem("product", product.toString());
      this.carritoService.getCarritos(product)
  }*/

  /*addCarrito(){
    let product=localStorage.getItem("product");
    this.carritoService.getCarritos(product)
    .subscribe(data=>{
      this.product = data;
    })
  }*/
  
  editcarrito(carrito: Carrito){
    this.carritoService.selectedCarrito = carrito;
  }

  deletecarrito(id: string){
    this.carritoService.deleteCarrito(id)
    .subscribe(res =>{
     this.getCarritos();
    });
  }

  confirmDeleteCarrito(id: string){
    if(confirm("¿Está seguro que desea eliminar el producto?")){
      this.deletecarrito(id);
    }
  }

  getCarritos() {
    this.carritoService.getCarritos()
      .subscribe(res => {
        this.carritoService.carritos = res as Carrito[];
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.carritoService.selectedCarrito = new Carrito();
    }
  }

  closeAlert()
  {
    this.alert=false
  }


/*PRODUCTOS*/

getProducts() {
  this.productService.getProducts()
    .subscribe(res => {
      this.productService.products = res as Product[];
      console.log(res);
    });
}

}