import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Guard } from './services/auth/guard';
import { AppRoutingModule } from './app.routing.module'; 

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
    //return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NavmenuComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
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
        // AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [Guard],
})
export class AppModule {

}

//ng-bulid, for building dist folder
//firebase init, for creating firebase.json
//firebase serve, for local hosting
//firebase deploy, for deploying on real host 
