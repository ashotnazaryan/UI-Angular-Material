// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { AngularFire } from 'angularfire2';
// import { AuthProviders, AuthMethods } from 'angularfire2/auth';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class FirebaseService {
//     constructor(private http: Http, public af: AngularFire) {

//     }

//     loginWithGoogle() {
//     return this.af.auth.login({
//             provider: AuthProviders.Google,
//             method: AuthMethods.Popup,
//         });
//     }

//     logout() {
//         return this.af.auth.logout();
//     }

//     getData() {
//         return this.http.get('assets/demo/data/charts-data.json')
//             .toPromise()
//             .then(res => res.json())
//             .then(data => { return data; });
//     }
// }
