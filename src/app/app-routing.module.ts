import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listemployeesComponent } from './components/listemployees/listemployees.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {
  path: 'listemployees',
  component: listemployeesComponent,
  pathMatch: "full"
  },
  {
    path:'employees',
    component: EmployeesComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
