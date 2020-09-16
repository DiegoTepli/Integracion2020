import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addEmployeesComponent } from './addemployees.component';

describe('EmployeesComponent', () => {
  let component: addEmployeesComponent;
  let fixture: ComponentFixture<addEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
