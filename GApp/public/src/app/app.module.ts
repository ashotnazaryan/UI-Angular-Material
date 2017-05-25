import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';
import { Guard } from '../services/auth/guard';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// export const firebaseConfig = {
//     apiKey: "AIzaSyBeGxpiDkiIAASm8neB7E8IrfN_Zz8vbng",
//     authDomain: "gapp-def88.firebaseapp.com",
//     databaseURL: "https://gapp-def88.firebaseio.com",
//     projectId: "gapp-def88",
//     storageBucket: "gapp-def88.appspot.com",
//     messagingSenderId: "479758522425"
// };

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
