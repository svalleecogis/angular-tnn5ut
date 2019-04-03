import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { AppComponent } from './app.component';

// Load all required data for the ES locale
import '@progress/kendo-angular-intl/locales/fr/all';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SchedulerModule
  ],
  providers: [{
    // Set LOCALE_ID to Spanish
    provide: LOCALE_ID, useValue: 'fr'
  }]
})
export class AppModule { }
