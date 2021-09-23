import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule }   from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { AppComponent }          from './app.component';
import { AppRouterModule }       from './app-router.module';
//primeNg
import { SharedModule }          from './shared/shared.module';
import { PrimeNgModule }         from './prime-ng/prime-ng.module';
import { VentasModule }          from './ventas/ventas.module';

//modulos de animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//cambiae el locale de la app
import localeEsp                 from '@angular/common/locales/es-CO';
import localeFr                  from '@angular/common/locales/fr';
import {registerLocaleData}      from '@angular/common';
registerLocaleData(localeEsp);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    PrimeNgModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-CO'}//registra el localeEsp(idioma español) para usarlo de manera global en la app
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
