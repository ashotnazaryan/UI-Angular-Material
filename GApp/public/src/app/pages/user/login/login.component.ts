import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../../services/firebase.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any;
  isLoggedIn: boolean;
  loading: boolean = false;

  constructor(public firebaseservice: FirebaseService, private router: Router) {
    
  }

  loginGoogle() {
    this.loading = true;
    this.firebaseservice.loginWithGoogle()
        .then((data) => {
            //debugger
            this.loading = false;
            if (data == null) {
              this.isLoggedIn = false;
              this.router.navigate(['/login']);
            } 
            else {
              this.isLoggedIn = true;
              this.user = data.user;
              this.router.navigate(['/home']);
            }
      });
    }
}
