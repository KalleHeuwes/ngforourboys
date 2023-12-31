import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CdkMenuModule  } from '@angular/cdk/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {MatChipsModule} from "@angular/material/chips";
import { FilterRowComponent } from './filter-row/filter-row.component';
import { FilterChipComponent } from './filter-row/filter-chip/filter-chip.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    HomeComponent,
    NotFoundComponent,
    FilterRowComponent,
    FilterChipComponent,
    MoviePageComponent,
    MusicPageComponent,
    LocationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule,
    CdkMenuModule,
    MatDividerModule,
    MatChipsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
