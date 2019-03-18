import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'qz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quizillion';
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async signin() {
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

}
