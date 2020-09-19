import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Carrito } from 'src/app/models/carrito';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-carritos',
  templateUrl: './carritos.component.html',
  styleUrls: ['./carritos.component.css'],
  providers: [ProductService]
})
export class CarritosComponent implements OnInit {
  
  alert:boolean=false
  product: Product = new Product();
  quantityProduct: number;
  total: number = 0;
  constructor(public productService: ProductService) { }
  idProduct = '';
  searchventaprod = '';
  listCarrito: Carrito[] = [];
  ngOnInit(): void {
    
  }



searchProduct(){
  this.productService.getCurrentData(this.idProduct)
  .subscribe(res=>{
    this.product = res;
  })
}




  saveCarrito(product: Product){
    let carrito: Carrito = new Carrito();
    carrito._id = product._id;
    carrito.product = product.name;
    carrito.amount = this.quantityProduct;
    carrito.price = product.price;
    carrito.subTotal = this.quantityProduct * product.price;
    this.total += carrito.subTotal;
    console.log(this.listCarrito);
    this.listCarrito.push(carrito);
   
  }
/*
  addCarrito(){
    let product=localStorage.getItem("product");
    this.carritoService.getCarritos(product)
    .subscribe(data=>{
      this.product = data;
    })
  }
  
  editcarrito(carrito: Carrito){
    this.carritoService.selectedCarrito = carrito;
  }*/

  deletecarrito(id: string){
    this.listCarrito = this.listCarrito.filter(carrito=>carrito._id != id);
  }

  confirmDeleteCarrito(id: string){
    if(confirm("¿Está seguro que desea eliminar el producto?")){
      this.deletecarrito(id);
    }
  }

  /*getCarritos() {
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


PRODUCTOS

getProducts() {
  this.productService.getProducts()
    .subscribe(res => {
      this.productService.products = res as Product[];
      console.log(res);
    });
}*/

}