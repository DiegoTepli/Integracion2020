import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'; 
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css'],
  providers: [EmployeeService]
})
export class listemployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  searchemp = '';

  ngOnInit(): void {
    this.getEmployees();
  }
  
  
  
  editemployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
    console.log(employee);
  }

deleteemployee(id: string){
  this.employeeService.deleteEmployee(id)
  .subscribe(res =>{
   this.getEmployees();
  });
}

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
        console.log(res);
      });
  }

  confirmDeleteEmployee(id: string){
    if(confirm("¿Está seguro que desea eliminar el empleado?")){
      this.deleteemployee(id);
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}

