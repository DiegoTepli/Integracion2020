import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; 
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css'],
  providers: [ProductService]
})
export class listproductsComponent implements OnInit {

  constructor(public productService: ProductService) { }

  searchprod = '';

  ngOnInit(): void {
    this.getProducts();
  }
  
  
  editproduct(product: Product){
    this.productService.selectedProduct = product;
  }

deleteproduct(id: string){
  this.productService.deleteProduct(id)
  .subscribe(res =>{
   this.getProducts();
  });
}

confirmDeleteProduct(id: string){
  if(confirm("¿Está seguro que desea eliminar el producto?")){
    this.deleteproduct(id);
  }
}

  getProducts() {
    this.productService.getProducts()
      .subscribe(res => {
        this.productService.products = res as Product[];
        console.log(res);
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}

