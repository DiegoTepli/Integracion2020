import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../services/venta.service'; 
import { NgForm } from '@angular/forms';
import { Venta } from 'src/app/models/venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers: [VentaService]
})
export class VentasComponent implements OnInit {
  
  alert:boolean=false

  constructor(public ventaService: VentaService) { }

  searchventaprod = '';

  ngOnInit(): void {
    this.getVentas();
  }
  addVenta(form: NgForm)
  {
    if(form.value.id){
      this.ventaService.putVenta(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        this.getVentas();
      })
    }
    else
    {
      this.ventaService.postVenta(form.value)
     .subscribe(res =>{
       this.resetForm(form);
      this.getVentas();
     });
    }
    this.alert=true
  }
  
  editventa(venta: Venta){
    this.ventaService.selectedVenta = venta;
  }

  deleteventa(id: string){
    this.ventaService.deleteVenta(id)
    .subscribe(res =>{
     this.getVentas();
    });
  }

  confirmDeleteVenta(id: string){
    if(confirm("¿Está seguro que desea eliminar el producto?")){
      this.deleteventa(id);
    }
  }

  getVentas() {
    this.ventaService.getVentas()
      .subscribe(res => {
        this.ventaService.ventas = res as Venta[];
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.ventaService.selectedVenta = new Venta();
    }
  }

  closeAlert()
  {
    this.alert=false
  }

}