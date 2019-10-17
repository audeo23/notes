import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  isDisabled: boolean = true;
  categoryName: string = "Undefined"
  tree: Array<String>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // let tree = this.dataService.getTree().then()

    fetch('http://localhost:3000/tree')
      .then(response => response.json())
      .then(json => { this.tree = json })

  }

  addCategory() {
    // this.data.push({ "name": "Untitled category", "projets": [] })
    // console.log(this.data);
  }

  addProject(id: string) {
    // console.log(this.data[id]);
    // this.data[id].projets.push("Untitled project")
  }

  deleteCategory(id: string) {
    // this.data.splice(id, 1);
  }

  openMenu(id: string) {
    // document.getElementById("category-menu-" + id).style.display = "block";
    // this.categoryName = this.data[id].name
  }

  closeMenu(id: string) {
    // document.getElementById("category-menu-" + id).style.display = "none"
  }

  onDone(id: string) {
    // this.data[id].name = this.categoryName
    // document.getElementById("category-menu-" + id).style.display = "none"
  }

}