import { Component, OnInit } from '@angular/core';
import { listemployeeService } from '../../services/listemployee.service'; 
import { NgForm } from '@angular/forms';
import { Listemployee } from 'src/app/models/listemployee';

declare var M: any;

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css'],
  providers: [listemployeeService]
})
export class listemployeesComponent implements OnInit {

  constructor(public listemployeeService: listemployeeService) { }

  ngOnInit(): void {
    
  }
  
  
  getEmployees() {
    this.listemployeeService.getEmployees()
      .subscribe(res => {
        this.listemployeeService.listemployees = res as Listemployee[];
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.listemployeeService.selectedlistEmployee = new Listemployee();
    }
  }
}

