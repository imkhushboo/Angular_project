import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },

  {
    path:"**",
    component:NoPageComponent
  }



  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





 }
