import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TestService } from '../../services/test.service';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About {

    data: any;
    errorMessage: any;
    constructor(private http: Http, private ts: TestService) {
        this.getNotes();
    }
    getNotes() {
        this.ts.getData('http://gapp-def88.herokuapp.com/notes', {})
            .subscribe(
                data => {
                    this.data = data; 
                    console.log(data);
                },
                error =>  {
                    this.errorMessage = <any>error;
                });
    }
}