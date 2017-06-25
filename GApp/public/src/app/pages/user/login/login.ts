import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	templateUrl: './login.html',
	styleUrls: ['./login.scss'],
	encapsulation: ViewEncapsulation.None
})
export class Login {

	user: any = {};
	socialUser: any;
	isLoggedIn: boolean;
	loading: boolean = false;

	constructor(public firebaseservice: FirebaseService, private router: Router) {
		
	}

	login(user) {
		this.loading = true;
		this.firebaseservice.loginEmailPassword(user)
			.then((data) => {
				this.loading = false;
				if (!data || data.code) {
					this.isLoggedIn = false;
					this.user = {};
				} 
				else {
					this.isLoggedIn = true;
					this.router.navigate(['/home']);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

  	loginGoogle() {
		this.loading = true;
			this.firebaseservice.loginWithGoogle()
				.then((data) => {
					this.loading = false;
					if (data == null) {
						this.isLoggedIn = false;
						this.router.navigate(['/login']);
					} 
					else {
						this.isLoggedIn = true;
						this.socialUser = data.user;
						this.router.navigate(['/home']);
					}
			});
	}

    loginFacebook() {
		this.loading = true;
		this.firebaseservice.loginWithFacebook()
			.then((data) => {
				this.loading = false;
				if (data == null) {
					this.isLoggedIn = false;
					this.router.navigate(['/login']);
				} 
				else {
					this.isLoggedIn = true;
					this.socialUser = data.user;
					this.router.navigate(['/home']);
				}
			});
    }
}
