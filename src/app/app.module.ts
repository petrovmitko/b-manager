import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { CommonService } from './common.service';
import { PnfComponent } from './pnf/pnf.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CommonService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
