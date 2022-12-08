import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JohnComponent } from './john/john.component';
import { Box2Component } from './box2/box2.component';

@NgModule({
  declarations: [
    AppComponent,
    JohnComponent,
    Box2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
