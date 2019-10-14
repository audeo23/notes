import { Component, OnInit } from '@angular/core';
import db2 from 'src/db2.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  data: any = db2;
  isDisabled: boolean = true;

  constructor() { }

  ngOnInit() { }

  addCategory() {
    this.data.push({ "name": "Untitled category" })
  }

  addProject(id: string) {
    this.data[id].projets.push("Untitled")
  }

  openMenu(id: string) {
    document.getElementById("category-menu-" + id).style.display = "block"
  }

  closeMenu(id: string) {
    document.getElementById("category-menu-" + id).style.display = "none"
  }

}