import { AuthGuard } from './authentication/guard/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
