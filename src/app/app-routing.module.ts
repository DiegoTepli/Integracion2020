import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listemployeesComponent } from './components/listemployees/listemployees.component';
import { addEmployeesComponent } from './components/addemployees/addemployees.component';
import { addProductsComponent } from './components/addproducts/addproducts.component';
import { listproductsComponent } from './components/listproducts/listproducts.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { DefaultLayoutComponent } from './containers';
import { resumenVentasComponent } from './components/resumen-ventas/resumen-ventas.component';
import { detalleFacturasComponent } from './components/detalle-facturas/detalle-facturas.component';
import {editEmployeesComponent} from './components/editemployees/editemployees.component';
import {editProductsComponent} from './components/editproducts/editproducts.component';
import { CarritosComponent } from './components/carritos/carritos.component';
const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
  {
    path:'',
    component: DefaultLayoutComponent,
    children:[
      {
      path: 'listemployees',
      component: listemployeesComponent, 
      },
      {
        path:'addemployees',
        component: addEmployeesComponent,
      },
      {
        path:'editemployees/:id',
        component: editEmployeesComponent,
      },
      {
        path:'editproducts/:id',
        component: editProductsComponent,
      },
    {
      path:'addproducts',
      component: addProductsComponent,
    },
    {
      path:'listproducts',
      component:listproductsComponent
    },
    {
      path:'ventas',
      component:VentasComponent
    },
    {
      path:'carrito',
      component:CarritosComponent
    },
    {
      path:'resumenVentas',
      component: resumenVentasComponent
    },
    {
      path:'detalleFacturas',
      component: detalleFacturasComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
