import { Component, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

 export class Header {

    @Input() sidenav: any;
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
                return 'gb';
            case 'ua':
                return 'ua';
            case 'am':
                return 'am';
            default:
                throw 'Unsupported Language';
        }
    }
 }
