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
    this.todos = [
      {
        serial_number: 1,
        title: 'This is title 1',
        description: 'This is description 1',
        active: true
      },
      {
        serial_number: 2,
        title: 'This is title 2',
        description: 'This is description 2',
        active: true
      },
      {
        serial_number: 3,
        title: 'This is title 3',
        description: 'This is description 3',
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

}
