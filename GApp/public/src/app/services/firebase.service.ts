import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

    constructor(private http: Http, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {

    }

    loginEmailPassword(user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                localStorage.setItem('currentUser', JSON.stringify(response));
                return response;
            })
            .catch(function(error) {
                return error;
            });
    }

    loginWithGoogle() {
        // debugger
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.user));
                return response;
            })
            .catch((error) => {
                throw error;
            });
    }

    loginWithFacebook() {
        // debugger
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((response) => {
                localStorage.setItem('currentUser', JSON.stringify(response.user));
                return response;
            })
            .catch((error) => {
                throw error;
            });
    }

    logout() {
        //debugger
        return this.afAuth.auth.signOut()
            .then((response) => {
                localStorage.removeItem('currentUser');
            })
            .catch((error) => {
                throw error;
            });
    }

    registerUser(user) {
        //debugger
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error;
            });

    }
}
