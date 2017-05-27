import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

 export class HeaderComponent {
    currentLanguage: string;
    translate: TranslateService;

    constructor(translate: TranslateService) {
        this.translate = translate;
        this.currentLanguage = this.getCurrentLanguage(translate.currentLang);

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = this.getCurrentLanguage(translate.currentLang);
        });
    }
    
    changeLanguage = function(lang){
        this.translate.use(lang);
    }
 
    getCurrentLanguage = function(lang: string){
        switch(lang){
            case 'en':
                return 'English';
            case 'ru':
                return 'Russian';
            case 'am':
                return 'Armenian';
            default:
                throw 'Unsupported Language';
        }
    }
 }
