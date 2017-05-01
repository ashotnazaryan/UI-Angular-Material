import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: []
})
export class AppModule {

}
