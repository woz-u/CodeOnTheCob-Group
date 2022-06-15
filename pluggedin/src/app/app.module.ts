import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { HomescreenComponent } from './screens/homescreen/homescreen.component';
import { MusicianprofilescreenComponent } from './Screens/musicianprofilescreen/musicianprofilescreen.component';
import { BandsscreenComponent } from './Screens/bandsscreen/bandsscreen.component';
import { HomeComponent } from './Screens/home/home.component';
import { CreateBandComponent } from './Screens/create-band/create-band.component';
import { BandProfileComponent } from './Screens/band-profile/band-profile.component';
import { CreatedBandComponent } from './Screens/created-band/created-band.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    HomescreenComponent,
    MusicianprofilescreenComponent,
    BandsscreenComponent,
    HomeComponent,
    CreateBandComponent,
    BandProfileComponent,
    CreatedBandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
