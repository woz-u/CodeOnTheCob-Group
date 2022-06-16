import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Screens/login/login.component';
import { MusicianRosterComponent } from './Screens/musician-roster/musician-roster.component';
import { CreateBandComponent } from './Screens/create-band/create-band.component';
import { CreateAccountComponent } from './Screens/create-account/create-account.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MusicianRosterComponent,
    CreateBandComponent,
    CreateAccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
