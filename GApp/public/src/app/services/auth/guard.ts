import { Injectable } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

    user: Object;
    constructor(protected router: Router) {
        this.user = localStorage.getItem('qwertyuiop');
    }

     canActivate() {
         debugger
         if (typeof this.user !== 'undefined' && this.user) {
            //this.router.navigate(['/home']);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}