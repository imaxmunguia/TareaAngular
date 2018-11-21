import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './miprimercomponente/miprimercomponente.component';
import { MisegundocomponenteComponent } from './misegundocomponente/misegundocomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    MisegundocomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
