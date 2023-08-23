import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MoviePageComponent} from "./pages/movie-page/movie-page.component";
import {MusicPageComponent} from "./pages/music-page/music-page.component";
import {LocationPageComponent} from "./pages/location-page/location-page.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviePageComponent },
  { path: 'music', component: MusicPageComponent },
  { path: 'locations', component: LocationPageComponent },
  { path: 'notfound', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
