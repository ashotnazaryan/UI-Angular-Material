import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/data.service';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About implements OnInit {

    loading: boolean = false;

    constructor(private http: Http, private dataservice: DataService) {
        
    }

    ngOnInit() {
        
    }

}