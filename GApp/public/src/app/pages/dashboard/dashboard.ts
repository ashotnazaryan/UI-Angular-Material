import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/data.service';

@Component({
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})

export class Dashboard implements OnInit {

    dashboard: any = {};
    errorMessage: any;
    loading: boolean = false;
    
    constructor(private http: Http, private ts: DataService) {
       
    }

    ngOnInit() {
        this.getDashboardData();
    }

    getDashboardData() {
        //https://gapp-def88.herokuapp.com/api/dashboard   http://localhost:5000/api/dashboard
        let url = 'https://gapp-def88.herokuapp.com/api/dashboard';
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