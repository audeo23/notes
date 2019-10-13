import { Component, OnInit } from '@angular/core';
import json from 'src/db.json'

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  data: any = json

  constructor() { }

  ngOnInit() {
  }
}