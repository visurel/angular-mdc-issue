import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MdcButtonModule, MdcThemeModule} from '@angular-mdc/web';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcButtonModule,
    MdcThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
