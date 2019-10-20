import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTree() {
    this.http
      .get<any[]>('http://localhost:3000/tree')
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
