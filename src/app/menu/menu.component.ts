import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  isDisabled: boolean = true;
  categoryName: string = "Undefined"
  tree = []




  constructor(private http: HttpClient) { }

  ngOnInit() {

    // Compute tree
    this.http.get<string[]>('http://localhost:3000/tree')
      .subscribe(
        (response) => { this.tree = response ; console.log(response); },
        (error) => { console.log('Erreur ! : ' + error); }
      );
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
