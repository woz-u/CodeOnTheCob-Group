import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MusicianRosterComponent } from './musician-roster/musician-roster.component';
import { ProjectsComponent } from './bands/projects/projects.component';
import { ProjectComponent } from './createBand/project/project.component';
import { CreateAccountComponent } from './create-account/create-account.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MusicianRosterComponent,
    ProjectsComponent,
    ProjectComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
