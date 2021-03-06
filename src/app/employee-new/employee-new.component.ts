import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

    employee: Employee = {
        name: 'anderson',
        salary: 0,
        bonus: 0
    };

  constructor(private employeeServce: EmployeeService) {
    // setTimeout(() => {
    //   this.name = 'School of Net';
    // }, 3000);
  }

  ngOnInit() {
  }

  addEmployee(event){
    const copy = Object.assign({}, this.employee);
    this.employeeServce.addEmployee(copy);
  }
}
