import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getTree() {
    return fetch('http://localhost:3000/tree')

  }

}
