import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'qz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login() {
    this.afAuth.auth
    .signInWithPopup(new auth.GoogleAuthProvider())
    .then(user => {
      this.router.navigateByUrl('/quiz');
    })
    ;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    if (this.afAuth.user) {
      this.router.navigateByUrl('/quiz');
    }
  }

}
