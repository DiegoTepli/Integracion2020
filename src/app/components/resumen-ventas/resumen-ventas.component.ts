import { Component, OnInit } from '@angular/core';
import { ResumenVentaService } from '../../services/Resumen-venta.service'; 
import { NgForm } from '@angular/forms';
import { ResumenVenta } from 'src/app/models/resumen-venta';


@Component({
  selector: 'app-resumen-ventas',
  templateUrl: './resumen-ventas.component.html',
  styleUrls: ['./resumen-ventas.component.css'],
  providers: [ResumenVentaService]
})
export class resumenVentasComponent implements OnInit {

  constructor(public resumenVentaService: ResumenVentaService) { }

  searchresVen = '';

  ngOnInit(): void {
    this.getResumenVentas();
  }
  
  
  
  editresumenVenta(resumenVenta: ResumenVenta){
    this.resumenVentaService.selectedResumenVenta = resumenVenta;
    console.log(this.resumenVentaService.selectedResumenVenta);
  }

deleteresumenVenta(id: string){
  this.resumenVentaService.deleteResumenVenta(id)
  .subscribe(res =>{
   this.getResumenVentas();
  });
}

  getResumenVentas() {
    this.resumenVentaService.getResumenVentas()
      .subscribe(res => {
        this.resumenVentaService.resumenVentas = res as ResumenVenta[];
        console.log(res);
      });
  }

  confirmDeleteResumenVenta(id: string){
    if(confirm("¿Está seguro que desea eliminar la factura?")){
      this.deleteresumenVenta(id);
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.resumenVentaService.selectedResumenVenta = new ResumenVenta();
    }
  }
}

