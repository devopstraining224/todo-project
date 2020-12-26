import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  newTodo = '';
  todo: Todo = new Todo()
  todoList: Todo[]=[];

  constructor(private todoStore: TodoService) {
    this.getTodos()
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.newTodo.length) {
        this.todo.title = this.newTodo
        this.todoStore.addTodo(this.todo)
        this.newTodo = '';
        this.getTodos()
    }
  }



  getTodos(){
    this.todoList = this.todoStore.getListTodo()
  }
}
