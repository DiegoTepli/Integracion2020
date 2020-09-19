import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; 
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { listproductsComponent } from 'src/app/components/listproducts/listproducts.component';
declare var M: any;

@Component({
  selector: 'edit-addproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css'],
  providers: [ProductService]
})
export class editProductsComponent implements OnInit {
  product: Product = new Product();
  alert:boolean=false

  constructor(public productService: ProductService) { }

  

  ngOnInit(): void {
    this.editproduct();
  }
  updateProduct(product: Product)
  {
   this.productService.putProduct(product)
    .subscribe(data=>{
      this.product=data;
    })
    this.alert=true
  }
  

  editproduct(){
    /*this.employeeService.selectedEmployee = employee;
    console.log(employee);*/
    let _id=localStorage.getItem("_id");
    this.productService.getCurrentData(_id)
    .subscribe(data=>{
      this.product = data;
    })
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
