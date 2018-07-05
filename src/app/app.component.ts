import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  status: boolean;

  onStatusHandler(thisStatus: boolean) {
    this.status = thisStatus;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAMXNqGZprzSKgJoTpLNjj6B_TFDUjX44',
      authDomain: 'recipe-book-c162a.firebaseapp.com'
    });
  }

}
