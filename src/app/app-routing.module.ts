import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {
    path:"",
    children:[{
      path:"home",
      component: HomeComponent
    },
  {
    path:"contact",
    component:ContactComponent
  },
{
  path:"gallery",
  component:GalleryComponent
}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





 }
