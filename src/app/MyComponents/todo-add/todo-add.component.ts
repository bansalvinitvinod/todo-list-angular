import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/MyModels/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  title: string = '';
  description: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo: Todo = {
      serial_number: 8,
      title: this.title,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
