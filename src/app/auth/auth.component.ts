import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'qz-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router
  ) { }

  async login() {
    try { 
      const user = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      console.log('user: ', user)
      this.router.navigateByUrl('/quiz');
    } catch(e) {
      console.log(e);
    }

  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    if (this.afAuth.auth.currentUser) {
      this.router.navigateByUrl('/quiz');
    } else {
      this.login();
    }
  }
}
