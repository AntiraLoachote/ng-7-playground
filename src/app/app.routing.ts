import { AuthGuard } from './authentication/guard/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
