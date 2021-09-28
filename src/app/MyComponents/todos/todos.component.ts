import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/MyModels/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {
    let localItem = localStorage.getItem("todos");
    if(localItem!=null)
      this.todos = JSON.parse(localItem);
    else
      this.todos = [];
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  markAsDoneTodo(todo: Todo) {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
