import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WindowRef } from '../../services/window.service';
import { TestService } from '../../services/test.service';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About implements OnInit {

    about: any = {};
    errorMessage: any;
    loading: boolean = false;
    fb: any;

    constructor(private http: Http, private ts: TestService, public windowref: WindowRef) {
        this.fb = this.windowref.nativeWindow;   
    }

    ngOnInit() {
        this.getAboutData();
    }
    
    getAboutData() {
        //'http://localhost:5000/api/about'   https://gapp-def88.herokuapp.com/api/notes
        // let url = 'https://gapp-def88.herokuapp.com/api/about';
        // let params = {};
        // this.loading = true;
        // this.ts.getData(url, params)
        //     .subscribe(
        //         data => {
        //             this.loading = false;
        //             this.about = data; 
        //         },
        //         error =>  {
        //             this.loading = true;
        //             this.errorMessage = <any>error;
        //         });

        // let accessToken = {
        //     access_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhlOTllN2Y1MTFkMTE2ODNhN2Y3MDY1OTc0ZDE3NmE1OThlNGRiNWMifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ2FwcC1kZWY4OCIsIm5hbWUiOiJBc2hvdCBOYXphcnlhbiIsInBpY3R1cmUiOiJodHRwczovL3Njb250ZW50Lnh4LmZiY2RuLm5ldC92L3QxLjAtMS9zMTAweDEwMC8xMDY4NjczMl84NjcyMzEzOTMyOTYxMjVfODg4ODQ0ODgyNjIyMzE1Mzk3N19uLmpwZz9vaD05OWMyOGY1YThhN2ZlZjE0ZTU4ZDE2M2YxZmJjYmMwYSZvZT01OUQ1QUVBMCIsImF1ZCI6ImdhcHAtZGVmODgiLCJhdXRoX3RpbWUiOjE0OTc4NTk3NjEsInVzZXJfaWQiOiJPdEVYazhGQWg3Uk9ySmhiTjNDUFFuZHFUUEYyIiwic3ViIjoiT3RFWGs4RkFoN1JPckpoYk4zQ1BRbmRxVFBGMiIsImlhdCI6MTQ5Nzg1OTc2MSwiZXhwIjoxNDk3ODYzMzYxLCJlbWFpbCI6ImFzaG90bmF6YXJ5YW40NUBvdXRsb29rLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTYwMDM5ODUzMzMxMjczNyJdLCJlbWFpbCI6WyJhc2hvdG5hemFyeWFuNDVAb3V0bG9vay5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJmYWNlYm9vay5jb20ifX0.lk3GktmI6ISMSztqN79XXWlUwZoprhun-7FW2ov25mZWzZon3d05QDWhhxHE9Zj0SmaRvt37hptkVpHIJdZ3MJfIPGFBalF1pcjAqq090VVzdF6aUABDmcfxzhxPKQvncTzCcko_D_ddMbx2KNEW018NsksmaB4UwsrfqRfYRmSYc6i4tWOQ-yDdH6nail1VinS6pQTnYLYMRVje8PhhjgF18tqXHpDj6xY71dqeK8USjrEFX6_kOKwPw5ZsOAsHJb7geUpwLF3FqrWDOkgZoYrP575SvkhsNF6HVy8J3dFeawDbXGGtFEWVwMPOfAdihu4FGutP9wgTgNvByWPDWQ"
        // };
        this.fb.FB.api('/me/feed', (response) => {
            //debugger
        });
    }
}