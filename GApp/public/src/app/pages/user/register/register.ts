import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';
//import { FirebaseAuthState } from 'angularfire2';

@Component({
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

    user: any = {};
    isLoggedIn: boolean;
    loading: boolean = false;

    constructor(public firebaseservice: FirebaseService, private router: Router) {
        
    }

    register(user) {
        this.loading = true;
        this.firebaseservice.registerUser(user)
            .then((data) => {

            });
        
    }
}