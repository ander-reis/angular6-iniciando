import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'anderson';
  employees = [];

  constructor() {
    setTimeout(() => {
      this.name = 'School of Net';
    }, 3000);
  }

  ngOnInit() {
  }

  addEmployee(event){
    this.employees.push(this.name);
    console.log(this.employees);
    console.log(event);
  }
}
