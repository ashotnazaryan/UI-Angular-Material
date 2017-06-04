import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Login } from './pages/user/login/login';
import { Home }   from './pages/home/home';
import { About } from './pages/about/about';
import { Guard } from './services/auth/guard';

const appRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [Guard], 
    children: [
          { path: 'about', component: About },
        ]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
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
