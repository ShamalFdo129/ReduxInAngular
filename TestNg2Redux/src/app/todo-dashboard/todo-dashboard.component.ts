import { Component } from '@angular/core';
import {NgRedux,select} from 'ng2-redux';
import {IAppState} from '../store'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select((m:IAppState)=>m.todos.length)
  todos: number; 
  @select("lastUpdate")
  lastUpdate; 
  
  // Read the comment in TodoService
  constructor(private ngRedux:NgRedux<IAppState>) { 
    
  }

  clearTodos() {
    this.ngRedux.dispatch({type:"CLEAR"});
  }
}
