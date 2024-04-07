import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterComponent } from './outer/outer.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    OuterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
