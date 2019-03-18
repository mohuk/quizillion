import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'qz-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.loggedIn = !!this.afAuth.auth.currentUser;
  }

}
