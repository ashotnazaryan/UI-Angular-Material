import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Login } from './pages/user/login/login';
import { Register } from './pages/user/register/register';
import { Home }   from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { About } from './pages/about/about';
import { Guard } from './services/auth/guard';

const appRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home, canActivate: [Guard], 
    children: [
          { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: Dashboard },
          { path: 'about', component: About },
          { path: 'profile', component: Profile }
        ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
