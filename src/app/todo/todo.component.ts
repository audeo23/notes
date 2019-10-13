import { Component, OnInit } from '@angular/core';
import json from 'src/db.json'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  data: any = json
  todos: any = json.sections[0].first.todos

  ngOnInit() {
  }

  addItem() {
    console.log("Add to-do item");
    this.todos.push({ name: '' })
    console.log(this.data)
  }
}