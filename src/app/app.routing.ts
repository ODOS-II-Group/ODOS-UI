import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
