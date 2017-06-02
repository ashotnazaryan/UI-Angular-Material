import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'shared-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})

export class NavmenuComponent {

    @Input() sidenav: any;
    user: any;

    constructor(public firebaseservice: FirebaseService, private router: Router){     
        this.user = localStorage.getItem('currentUser');
        console.log("User: ", localStorage.getItem('currentUser'));
    }

    logout() {
        this.firebaseservice.logout()
            .then((data) => {
                console.log("logout: ", data);
            });
    }
}
