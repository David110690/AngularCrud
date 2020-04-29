import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  msg:string = '';


  employees = [
    {'name': 'David', position: 'Enginer', email: 'David@email.com'},

  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
      this.employees.push(this.model);
      this.msg = 'Added Employee';
      this.model = {};
  }

  deleteEmployee(i):void {
    var answer = confirm('You want to delete the employee?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'Employee removed';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Updated Employee';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
