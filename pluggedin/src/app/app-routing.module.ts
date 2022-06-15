import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { createdbandComponent } from './createdband/createdband.component';
import { createbandComponent } from './createband/createband.component';
import { bandprofileComponent } from './bandprofile/bandprofile.component';






const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const routes: Routes = [
  { path: 'home-component', component: homeComponent },
  { path: 'createdband-component', component: createdbandComponent },
  { path: 'createband-component', component: createbandComponent },
  { path: 'bandprofile-component', component: bandprofileComponent },




];