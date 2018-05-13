import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux,NgReduxModule,DevToolsExtension} from 'ng2-redux'; 
import {IAppState,rootReducer,INITIAL_STATE} from './store';
import {TodoDashboardComponent} from './todo-dashboard/todo-dashboard.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoService} from './todo.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>,devTool:DevToolsExtension){
     ngRedux.configureStore(rootReducer,INITIAL_STATE);
     
  }
}
