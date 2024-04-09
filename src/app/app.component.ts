import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "To-do list"
 tasks:any= []
  addTask(value:any)
  {
    this.tasks.push({id:this.tasks.length , name : value});
  }

  removeTask(id:Number)
  {
    this.tasks = this.tasks.filter((item:any) => item.id !== id);
  }
}
