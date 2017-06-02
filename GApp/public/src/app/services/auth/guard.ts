import { Injectable } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

    constructor(protected router: Router) {
        //this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

     canActivate() {
         //debugger
         let user = JSON.parse(localStorage.getItem('currentUser'));
         if (user) {
            //this.router.navigate(['/home']);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}