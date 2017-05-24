import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Guard } from '../services/auth/guard';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

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
        AppRoutingModule
    ],
    providers: [Guard],
})
export class AppModule {

}


// firebase deploy --project gapp-def88
// firebase serve