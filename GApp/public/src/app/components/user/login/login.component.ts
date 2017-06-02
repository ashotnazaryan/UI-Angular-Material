import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { FirebaseService } from '../../../services/firebase.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(/*public fbs: FirebaseService,*/ private router: Router) {

  }

//   loginGoogle() {
//     this.fbs.loginWithGoogle()
//         .then((data) => {
//             this.router.navigate(['/home']);
//         })
//     }
}
