import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {  } from 'angularfire2/auth';

@Injectable()
export class FirebaseService {

    constructor(private http: Http, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {

    }

    loginEmailPassword(user) {
        debugger
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {

            })
    }

    loginWithGoogle() {
        // debugger
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((data) => {
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                return data;
            });
    }

    loginWithFacebook() {
        // debugger
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((data) => {
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                return data;
            });
    }

    logout() {
        //debugger
        return this.afAuth.auth.signOut()
            .then((data) => {
                localStorage.removeItem('currentUser');
            });
    }

    registerUser(user) {
        debugger
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((data) => {

            });

    }

    // getData() {
    //     return this.http.get('assets/demo/data/charts-data.json')
    //         .toPromise()
    //         .then(res => res.json())
    //         .then(data => { return data; });
    // }
}
