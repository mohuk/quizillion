import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const AuthRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
