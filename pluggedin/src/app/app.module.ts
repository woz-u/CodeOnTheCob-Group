import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './Screens/home/home.component';
import { CreatedBandComponent } from './Screens/created-band/created-band.component';
import { CreateBandComponent } from './Screens/create-band/create-band.component';
import { BandProfileComponent } from './Screens/band-profile/band-profile.component';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'bandprofile', component: BandProfileComponent},
      {path: 'createband', component: CreateBandComponent},
      {path: 'createdband', component: CreatedBandComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
