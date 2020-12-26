import { Injectable } from '@angular/core';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[]=[];


  constructor() { }

  addTodo(todo:Todo){
    this.todoList.push(todo)
  }

  getListTodo(){
    return this.todoList
  }

  removeTodo(todo:string){
  }

  updateTodo(todo:string){}
}
