import {tassign} from 'tassign';
import { Title } from '@angular/platform-browser';

export interface IAppState{
    counter:number;
    messaging:{
        noOfMsg:number
    },
    todos:any[],
    lastUpdate:Date
}

export const INITIAL_STATE :IAppState={
    counter:0,
    messaging:{noOfMsg:5},
    todos:[],
    lastUpdate:null
}

export function rootReducer(state:IAppState,action):IAppState{
    var newTodo;
    switch(action.type){
        case "INCREMENT":
            return tassign(state,{counter:state.counter+1,
                                messaging:{noOfMsg:state.messaging.noOfMsg +1}});
        case "ADD":
            newTodo={id:state.todos.length+1,title:action.title};
            return tassign(state,{todos:state.todos.concat(newTodo),lastUpdate:new Date()})
        case "TOGGLE":
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return tassign(state, {
                todos: [...state.todos.slice(0, index),tassign(todo, { isCompleted: !todo.isCompleted }),...state.todos.slice(index + 1),
                ],lastUpdate: new Date()
              });
        case "REMOVE":
              console.log("test");
            return tassign(state,{todos:state.todos.filter(t=> t.id !== action.id),lastUpdate:new Date()});
        case "CLEAR":
            return tassign(state,{todos:[],lastUpdate:new Date()});
    }
    return state;
}