import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/data.service';
import * as firebase from 'firebase/app';

@Component({
    templateUrl: './profile.html',
    styleUrls: ['./profile.scss']
})

export class Profile implements OnInit {

    user: any;
    loading: boolean = false;

    constructor(private http: Http, private dataservice: DataService) {
        
    }

    ngOnInit() {
        //this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.user = firebase.auth().currentUser;  //get user
        // if(this.user != null) {
        //     this.user.updateProfile({
        //         displayName: "Poxos"
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // }
        
    }

}