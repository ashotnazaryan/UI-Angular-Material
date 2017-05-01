import { Component } from '@angular/core';

@Component({
  selector: 'shared-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})

export class NavmenuComponent {
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
