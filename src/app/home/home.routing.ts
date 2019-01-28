import { HomeCreateComponent } from './home-create/home-create.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeListComponent } from './home-list/home-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: HomeListComponent
      },
      {
        path: 'create',
        component: HomeCreateComponent
      },
      {
        path: 'detail/:id',
        component: HomeDetailComponent
      }
    ]
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
