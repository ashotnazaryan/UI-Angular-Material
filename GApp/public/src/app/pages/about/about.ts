import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TestService } from '../../services/test.service';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About {

    about: any = {};
    errorMessage: any;
    loading: boolean = false;
    constructor(private http: Http, private ts: TestService) {
        this.getAboutData();
    }
    getAboutData() {
        //'http://localhost:5000/api/about'   https://gapp-def88.herokuapp.com/api/notes
        let url = 'https://gapp-def88.herokuapp.com/api/about';
        let params = {};
        this.loading = true;
        this.ts.getData(url, params)
            .subscribe(
                data => {
                    this.loading = false;
                    this.about = data; 
                },
                error =>  {
                    this.loading = true;
                    this.errorMessage = <any>error;
                });
    }
}