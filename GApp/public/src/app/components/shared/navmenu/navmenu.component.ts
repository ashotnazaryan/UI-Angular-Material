import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})

export class NavmenuComponent {
    @Input() sidenav: any;
    user: Object;
    constructor(){
        
        this.user = {
            firstName: "Ashot",
            lastName: "Nazaryan",
            location: "Yerevan",
            about: "tra la la"
        }
    }
}
