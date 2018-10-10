import { Injectable } from '@angular/core';
import {FilmZoekResultaat} from "./model/film-zoek-resultaat";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Movie} from "./model/movie";

@Injectable({
  providedIn: 'root',
})
export class TheMovieDBService {
  mock = false; // snelle manier om straks ook lokaal door te kunnen werken
  localUrl = 'http://localhost:4200/assets/shrek-movies.json';
  localIdUrl = 'http://localhost:4200/assets/puss_in_boots.json';
  zoekUrl = 'https://api.themoviedb.org/3/search/movie';
  detailUrl = 'https://api.themoviedb.org/3/movie/';
  apiKey = '4551483fa0da633eaffefbb807ac1d55';

  constructor(private httpClient: HttpClient) {  }

  // getData(zoekString: string): FilmZoekResultaat {
  //   const movies = [];
  //   movies.push(new Movie(1, 'Shrek', '2010-05-17', 'http://assets.papelpop.com/wp-content/uploads/2017/03/shrek.jpg', 8));
  //   movies.push(new Movie(2, 'Puss in Boots', '2010-05-17', 'http://www.thespectrumofriemannium.com/wp-content/uploads/2015/08/SchrekScherk.jpg', 8.8));
  //   return new FilmZoekResultaat(1, 20, 1, movies);
  // }

  // getData(zoekString: string): Observable<FilmZoekResultaat> {
  //   return this.httpClient.get<FilmZoekResultaat>(this.localUrl);
  // }
  getData(zoekString: string, page: number): Observable<FilmZoekResultaat> {
    let url = `${this.zoekUrl}?api_key=${this.apiKey}&query=${zoekString}&page=${page}`;
    return this.httpClient.get<FilmZoekResultaat>(url);
  }

  getDetails(id: number): Observable<Movie> {
    let url = `${this.detailUrl}${id}?api_key=${this.apiKey}`;
    return this.httpClient.get<Movie>(url);
  }
}
