import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'; 
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { listemployeesComponent } from 'src/app/components/listemployees/listemployees.component';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css'],
  providers: [EmployeeService]
})
export class addEmployeesComponent implements OnInit {
  
  alert:boolean=false

  constructor(public employeeService: EmployeeService) { }

  

  ngOnInit(): void {
    
  }
  addEmployee(form: NgForm)
  {
    if(form.value.id){
      this.employeeService.putEmployee(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        this.getEmployees();
      })
    }
    else
    {
      this.employeeService.postEmployee(form.value)
     .subscribe(res =>{
       this.resetForm(form);
      this.getEmployees();
     });
    }
    this.alert=true
  }
  

  editemployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
    console.log(employee);
  }
  
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  closeAlert()
  {
    this.alert=false
  }


  
}
