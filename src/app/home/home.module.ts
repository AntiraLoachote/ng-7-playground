import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeCreateComponent } from './home-create/home-create.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeSharedComponent } from './home-shared/home-shared.component';

@NgModule({
  declarations: [HomeComponent, HomeListComponent, HomeCreateComponent, HomeDetailComponent, HomeSharedComponent],
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule
  ],
  exports: [HomeSharedComponent]
})
export class HomeModule { }
