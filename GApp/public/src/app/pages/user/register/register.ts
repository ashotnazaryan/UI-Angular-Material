import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Register {

    user: any = {};
    isRegistered: boolean;
    loading: boolean = false;

    constructor(public firebaseservice: FirebaseService, private router: Router) {
        
    }

    register(user) {
        this.loading = true;
        this.firebaseservice.registerUser(user)
            .then((data) => {
                this.loading = false;
				if (!data || data.code) {
					this.isRegistered = false;
					this.user = {};
				} 
				else {
					this.isRegistered = true;
                    this.firebaseservice.loginEmailPassword(user)
                        .then((data) => {
                            this.router.navigate(['/home']);
                        })
                        .catch((err) => {
                            this.router.navigate(['/login']);
                        });
					
				}
            })
            .catch((err) => {
                console.log(err);
            });
        
    }
}