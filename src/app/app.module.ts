import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { TroisComponent } from './trois/trois.component';
import { QuatreComponent } from './quatre/quatre.component';
import { CinqComponent } from './cinq/cinq.component';
import { SoixanteDouzeComponent } from './soixante-douze/soixante-douze.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { ImgBackgroundComponent } from './img-background/img-background.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisComponent,
    QuatreComponent,
    CinqComponent,
    SoixanteDouzeComponent,
    SeeMoreComponent,
    ImgBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
