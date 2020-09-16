import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; 
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { listproductsComponent } from 'src/app/components/listproducts/listproducts.component';
declare var M: any;

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
  providers: [ProductService]
})
export class addProductsComponent implements OnInit {
  
  alert:boolean=false

  constructor(public productService: ProductService) { }

  

  ngOnInit(): void {
    
  }
  addProduct(form: NgForm)
  {
    if(form.value.id){
      this.productService.putProduct(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        this.getProducts();
      })
    }
    else
    {
      this.productService.postProduct(form.value)
     .subscribe(res =>{
       this.resetForm(form);
      this.getProducts();
     });
    }
    this.alert=true
  }
  
  editproduct(product: Product){
    this.productService.selectedProduct = product;
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(res => {
        this.productService.products = res as Product[];
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }

  closeAlert()
  {
    this.alert=false
  }

}
