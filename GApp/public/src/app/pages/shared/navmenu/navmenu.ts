import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'shared-navmenu',
  templateUrl: './navmenu.html',
  styleUrls: ['./navmenu.scss']
})

export class Navmenu {

    @Input() sidenav: any;
    user: any;

    constructor(public firebaseservice: FirebaseService, private router: Router){   
        //debugger
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log("current User", this.user);
    }

    logout() {
        this.firebaseservice.logout()
            .then((data) => {
                
            });
    }
}
