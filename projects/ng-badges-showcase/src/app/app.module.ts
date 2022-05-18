import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBadgesModule } from 'projects/ngx-badges/src/public-api';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxBadgesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
