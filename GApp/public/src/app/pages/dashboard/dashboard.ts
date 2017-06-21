import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WindowRef } from '../../services/window.service';
import { TestService } from '../../services/test.service';

@Component({
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})

export class Dashboard implements OnInit {

    dashboard: any = {};
    errorMessage: any;
    loading: boolean = false;
    fb: any;
    
    constructor(private http: Http, private ts: TestService, public windowref: WindowRef) {
        this.fb = this.windowref.nativeWindow; 
    }

    ngOnInit() {
        this.getDashboardData();
    }

    getDashboardData() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        //debugger
        // this.fb.FB.api('/me/feed', (response) => {
            
        // });
        let url = 'https://gapp-def88.herokuapp.com/api/dashboard'; //https://gapp-def88.herokuapp.com/api/dashboard   http://localhost:5000/api/dashboard
        let params = {};
        this.loading = true;
        this.ts.getData(url, params)
            .subscribe(
                data => {
                    this.loading = false;
                    this.dashboard = data.data; 
                },
                error =>  {
                    this.loading = true;
                    this.errorMessage = <any>error;
                });
    }
}