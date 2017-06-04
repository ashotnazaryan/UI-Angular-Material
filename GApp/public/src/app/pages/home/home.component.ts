import { Component, Input } from '@angular/core';
//import { FirebaseService } from '../../services/firebase.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
    //@Input() sidenav: any;

    constructor(/*public firebaseservice: FirebaseService*/) {

    }
    // getData() {
    //     return this.firebaseservice.getData()
    //         .then(data => { 
    //             console.log(data); 
    //         });
    // }
}
