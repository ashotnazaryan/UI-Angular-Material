import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../../services/firebase.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any;
  token: any;

  constructor(public firebaseservice: FirebaseService, private router: Router) {

  }

  loginGoogle() {
    this.firebaseservice.loginWithGoogle()
        .then((data) => {
            this.user = data.user;
            this.token = data.credential.accessToken;

            console.log("User: ", this.user);
            console.log("Token: ", this.token);

            localStorage.setItem('user', this.user);
            localStorage.setItem('token', this.token);
            
            this.router.navigate(['/home']);
        })
    }
}
