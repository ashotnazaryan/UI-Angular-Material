import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './components/app/app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,

        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MaterialModule     
    ],
    providers: []
})
export class AppModule {

}
