import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// componentes examen

import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';


const routes: Routes = [
  {path: 'about-component' , component: AboutComponentComponent},
  {path: 'contact-component' , component: ContactComponentComponent},
  {path: 'home-component' , component: HomeComponentComponent},
  {path: 'posts-component' , component: PostsComponentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
