import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})

export class NavmenuComponent {

    @Input() sidenav: any;
    currentUser: any;

    constructor(){     
        this.currentUser = localStorage.getItem('user');
        console.log("User: ", this.currentUser);
    }
}
