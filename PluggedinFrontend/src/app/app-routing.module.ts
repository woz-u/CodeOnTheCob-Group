import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Screens/login/login.component';
import { CreateAccountComponent } from './Screens/create-account/create-account.component';
import { MusicianRosterComponent } from './Screens/musician-roster/musician-roster.component';
import { CreateBandComponent } from './Screens/create-band/create-band.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'musician-roster',
    component: MusicianRosterComponent,
  },
  {
    path: 'create-band',
    component: CreateBandComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
