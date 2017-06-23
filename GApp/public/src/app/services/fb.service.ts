import { Http } from '@angular/http';  
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';  
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {

	private appAccessToken = '312207065906011|vtEVsI_WuhXAm0B9ce2nByeGECE';  //App token from https://developers.facebook.com/tools/accesstoken
	private userAccessToken = 'EAACEdEose0cBAJBosq73bp6j1ZCuOdUBdT2EJ3d8RZCx2sD5POZAs0vRoPFDNGrkDYdeiwFBVVZAqaQvZBnHp0TLWp8KzWKaJAuvrLXo09uQg5B56QzlGuEZA2NL6wLG3ZBb53PnUgTIJYhZB163j7pws1Mg7HuRBqqN5NkwsmuhxwO7XbZChgTWTuTy82VRQJh4ZD';

	private graphUrl = 'https://graph.facebook.com/';
	private graphQuery = `?access_token=${this.appAccessToken}&fields=posts{from,created_time,message,attachments}`;

	constructor(private http: Http) { 
		
	}

	getPosts(pageName: string): Observable<any[]> {
		debugger
		let url = this.graphUrl + pageName + this.graphQuery;

		return this.http.get(url)
			.map(response => response.json().posts.data)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		}
}