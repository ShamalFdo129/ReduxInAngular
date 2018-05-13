import { Component } from '@angular/core';
import {NgRedux, select} from 'ng2-redux'; 
import {IAppState,rootReducer} from './store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select("counter")
  counter:number;

  @select((m:IAppState)=>m.messaging.noOfMsg)
  noOfMsg:number;

  constructor(private ngRedux:NgRedux<IAppState>){

  }

  increment(){
    this.ngRedux.dispatch({type:"INCREMENT"});
  }
}
