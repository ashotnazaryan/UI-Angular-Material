import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TestService } from '../../services/test.service';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About {

    countries: any;
    errorMessage: any;
    loading: boolean = false;
    constructor(private http: Http, private ts: TestService) {
        this.getNotes();
    }
    getNotes() {
        //'http://localhost:5000/api/notes';   http://gapp-def88.herokuapp.com/api/notes
        let url = 'https://gapp-def88.herokuapp.com/api/notes';
        let params = {};
        this.loading = true;
        this.ts.getData(url, params)
            .subscribe(
                data => {
                    this.loading = false;
                    this.countries = data.countries; 
                },
                error =>  {
                    this.loading = true;
                    this.errorMessage = <any>error;
                });
    }
}