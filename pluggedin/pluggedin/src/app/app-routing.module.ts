import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'createAccount',
  //   component: createAccountComponent
  // },
  // {
  //   path: 'musicianRoster',
  //   component: musicianRosterComponent
  // },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
