import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<hr><h2>Employee List Contact</h2><br><ul *ngFor="let employee of Employees"><li> {{employee.name}}</ul> {{ErrorMessage}}',
  styles: []
})


export class ContactComponent implements OnInit {


  public Employees =[];
    public ErrorMessage ;
  
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe(data => this.Employees = data,
                      error => this.ErrorMessage = error);
  }
}
