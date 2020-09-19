import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { addEmployeesComponent } from './components/addemployees/addemployees.component';
import { HttpClientModule } from '@angular/common/http';
import { listemployeesComponent } from './components/listemployees/listemployees.component';
import { FilterempsearchPipe } from './pipes/filterempsearch.pipe';
import { addProductsComponent } from './components/addproducts/addproducts.component';
import { listproductsComponent } from './components/listproducts/listproducts.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { FilterprodsearchPipe } from './pipes/filterprodsearch.pipe';
import { FilterventasearchprodPipe } from './pipes/filterventasearchprod.pipe';
import { DefaultLayoutComponent } from './containers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { resumenVentasComponent } from './components/resumen-ventas/resumen-ventas.component';
import { detalleFacturasComponent } from './components/detalle-facturas/detalle-facturas.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgxSpinnerModule} from 'ngx-spinner'
import {NgxPaginationModule} from 'ngx-pagination';
import { editEmployeesComponent } from './components/editemployees/editemployees.component';
import { editProductsComponent } from './components/editproducts/editproducts.component';
import { CarritosComponent } from './components/carritos/carritos.component';


@NgModule({
  declarations: [
    AppComponent,
    addEmployeesComponent,
    listemployeesComponent,
    FilterempsearchPipe,
    FilterprodsearchPipe,
    addProductsComponent,
    listproductsComponent,
    VentasComponent,
    FilterventasearchprodPipe,
    DefaultLayoutComponent,
    resumenVentasComponent,
    detalleFacturasComponent,
    editEmployeesComponent,
    editProductsComponent,
    CarritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }