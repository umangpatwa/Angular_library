import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NgxLiveDemoModule } from 'ngx-live-demo';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgxLiveDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
