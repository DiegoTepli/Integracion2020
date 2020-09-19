import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'; 
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { listemployeesComponent } from 'src/app/components/listemployees/listemployees.component';

@Component({
  selector: 'app-editemployees',
  templateUrl: './editemployees.component.html',
  styleUrls: ['./editemployees.component.css'],
  providers: [EmployeeService]
})
export class editEmployeesComponent implements OnInit {
  
  employee: Employee = new Employee();
  alert:boolean=false

  constructor(public employeeService: EmployeeService) { }

  

  ngOnInit(): void {
    this.editemployee();
  }
  updateEmployee(employee: Employee)
  {
   this.employeeService.putEmployee(employee)
    .subscribe(data=>{
      this.employee=data;
    })
    this.alert=true
  }
  

  editemployee(){
    /*this.employeeService.selectedEmployee = employee;
    console.log(employee);*/
    let _id=localStorage.getItem("_id");
    this.employeeService.getCurrentData(_id)
    .subscribe(data=>{
      this.employee = data;
    })
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
