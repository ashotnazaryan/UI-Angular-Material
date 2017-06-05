import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class Home {

    constructor(http: Http) {
        //debugger
        http.get('http://localhost:4201/notes')
            .map(res => res.json())
            .catch(data => { 
                return data; 
            })
            .subscribe(response => {
                console.log(response);
            });
    }
}
