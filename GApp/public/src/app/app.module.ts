import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//import { WindowRef } from './services/window.service';
import { Guard } from './services/auth/guard';
import { FirebaseService } from './services/firebase.service';
import { DataService } from './services/data.service';
//import { FacebookService } from './services/fb.service';
import { AppRoutingModule } from './app.routing.module'; 

import { App } from './pages/app/app';
import { Login } from './pages/user/login/login';
import { Register } from './pages/user/register/register';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Navmenu } from './pages/shared/navmenu/navmenu';
import { Header } from './pages/shared/header/header';
import { Footer } from './pages/shared/footer/footer';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

export const firebaseConfig = {
  apiKey: 'AIzaSyBeGxpiDkiIAASm8neB7E8IrfN_Zz8vbng',
  authDomain: 'gapp-def88.firebaseapp.com',
  databaseURL: 'https://gapp-def88.firebaseio.com',
  storageBucket: 'gs://gapp-def88.appspot.com',
//   messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
    bootstrap: [App],
    declarations: [
        App,
        Login,
        Register,
        Home,
        Dashboard,
        About,
        Profile,
        Navmenu,
        Header,
        Footer
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        AppRoutingModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [Http]
            }
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [Guard, /*WindowRef ,*/ FirebaseService, DataService /*, FacebookService*/]
})
export class AppModule {

}

//ng-bulid, for building dist folder
//firebase init, for creating firebase.json
//firebase serve, for local hosting
//firebase deploy, for deploying on real host 
