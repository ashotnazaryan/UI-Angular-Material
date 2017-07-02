import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/data.service';

@Component({
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})

export class Dashboard implements OnInit {

    posts: any[] = [];
    errorMessage: any;
    loading: boolean = false;
    
    constructor(private http: Http, private dataservice: DataService) {
       
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        //https://gapp-def88.herokuapp.com/api/getPosts   http://localhost:5000/api/getPosts
        let url = 'http://localhost:5000/api/getPosts';
        let params = {};
        this.loading = true;
        this.dataservice.getData(url, params)
            .subscribe(
                data => {
                    this.loading = false;
                    this.posts = data.posts; 
                },
                error =>  {
                    this.loading = true;
                    this.errorMessage = <any>error;
                });
    }

    setPost(model) {
        debugger
        let url = 'http://localhost:5000/api/setPost';
        let params = {post: model};
        this.loading = true;
        this.dataservice.getData(url, params)
            .subscribe(
                data => {
                    this.loading = false;
                    //this.posts = data.posts; 
                },
                error =>  {
                    this.loading = false;
                    this.errorMessage = <any>error;
                });
    }
}