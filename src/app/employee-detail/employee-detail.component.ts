import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: '<hr><h2>Employee List Detail </h2><br><ul *ngFor="let employee of Employees"><li>{{employee.id}}  {{employee.name}}  {{employee.Age}}</ul>{{ErrorMessage}}',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public Employees =[];
  public ErrorMessage;

  
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.Employees = data,
                   error =>this.ErrorMessage = error);
  }

}
