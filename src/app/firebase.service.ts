import { Injectable } from '@angular/core';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyBD7tagwQgdx4OZ7t1hJbKQFE1Nekpv3w8',
  authDomain: 'notes-aed36.firebaseapp.com',
  projectId: 'notes-aed36'
});

var db = firebase.firestore();

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
