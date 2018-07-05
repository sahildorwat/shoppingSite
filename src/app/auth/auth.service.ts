import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {}

  signupUser ( email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      response => console.log(response)
    )
    .catch(
      error => console.log(error)
    );
  }

  signinUser ( email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
              res => {
                this.router.navigate(['/recipes']);
                console.log(res);
                firebase.auth().currentUser.getIdToken().then(
                  token => this.token = token
                );
              }
            )
            .catch(
              error => console.log(error)
            );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      token => this.token = token
    );
    return this.token;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
