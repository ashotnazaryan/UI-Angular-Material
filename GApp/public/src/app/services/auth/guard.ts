import { Injectable } from '@angular/core';
import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

    user: Object;
    constructor(protected router: Router) {
        this.user = localStorage.getItem('proovv_access_token');
    }

     canActivate() {
        //  if (this.user) {
        //     return true;
        //     // logged in so return true
        //     // this.router.navigate(['/dashboard']);
        // }
        // else {
        //     // // not logged in so redirect to login page
        //     //this.router.navigate(['/landing']);
        //     return false;
        // }
        return true;
    }
}