import { Http } from '@angular/http';  
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {

  private accessToken = '312207065906011|vtEVsI_WuhXAm0B9ce2nByeGECE';  //App token from https://developers.facebook.com/tools/accesstoken

  private graphUrl = 'https://graph.facebook.com/';
  private graphQuery = `?access_token=${this.accessToken}&date_format=U&fields=posts{from,created_time,message,attachments}`;

  constructor(private http: Http) { }

  getPosts(pageName: string): Observable<any[]> {
      debugger
    let url = this.graphUrl + pageName + this.graphQuery;

    return this.http.get(url)
        .map(response => response.json().posts.data);
   }
}