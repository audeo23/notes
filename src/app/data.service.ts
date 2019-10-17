import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient) { }

  public getTree() {
    return this.httpClient.get('http://localhost:3000/tree');
  }

}