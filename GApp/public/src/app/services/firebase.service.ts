import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

    constructor(private http: Http, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {

    }

    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((data) => {
                return data;
            });
    }

    logout() {
        return this.afAuth.auth.signOut()
            .then((data) => {
                let user = localStorage.getItem('currentUser');
                user = null;
                return data;
            });
    }

    // getData() {
    //     return this.http.get('assets/demo/data/charts-data.json')
    //         .toPromise()
    //         .then(res => res.json())
    //         .then(data => { return data; });
    // }
}
