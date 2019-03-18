import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'qz-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  title = 'quizillion';
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async signin() {
    try {
      const user = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      console.log('user: ', user)
      this.router.navigateByUrl('/dashboard');
    } catch(e) {
      console.log(e);
    }

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
