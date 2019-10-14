import { Component, OnInit, NgModule } from '@angular/core';
import db2 from 'src/db2.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  data: any = db2;
  isDisabled: boolean = true;
  categoryName: string = "Undefined"

  constructor() { }

  ngOnInit() { }

  addCategory() {
    this.data.push({ "name": "Untitled category", "projets": [] })
    console.log(this.data);
  }

  addProject(id: string) {
    console.log(this.data[id]);
    this.data[id].projets.push("Untitled project")
  }

  deleteCategory(id: string) {
    this.data.splice(id, 1);
  }

  openMenu(id: string) {
    document.getElementById("category-menu-" + id).style.display = "block";
    this.categoryName = this.data[id].name
  }

  closeMenu(id: string) {
    document.getElementById("category-menu-" + id).style.display = "none"
  }

  onDone(id: string) {
    this.data[id].name = this.categoryName
    document.getElementById("category-menu-" + id).style.display = "none"
  }

}