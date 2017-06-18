import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TestService } from '../../services/test.service';

@Component({
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})

export class Dashboard {

    dashboard: any = {};
    errorMessage: any;
    loading: boolean = false;
    constructor(private http: Http, private ts: TestService) {
        this.getDashboardData();
    }
    getDashboardData() {
        
        let url = 'http://gapp-def88.herokuapp.com/api/dashboard'; //https://gapp-def88.herokuapp.com/api/dashboard
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