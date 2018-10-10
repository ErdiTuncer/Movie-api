import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FilmDetailsComponent } from './film-details/film-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RatingPipe } from './rating.pipe';
import { TmdbImagePipe } from './tmdb-image.pipe';
import { NamesPipe } from './names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    FilmDetailsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RatingPipe,
    TmdbImagePipe,
    NamesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'',
      component: DashboardComponent
    },
    {
      path: 'movies',
        component: SearchMoviesComponent
    }, {
        path: 'movies/:searchString',
        component: SearchMoviesComponent
      },
      { path:'**', component: PageNotFoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
