import {Component, OnInit, Output} from '@angular/core';
import { Movie } from "../model/movie";
import { TheMovieDBService } from '../the-movie-db.service';
import { FilmZoekResultaat } from "../model/film-zoek-resultaat";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
  providers: [ TheMovieDBService ],

})

export class SearchMoviesComponent implements OnInit {
  //myFavorite: Movie = new Movie(1, 'Scarface', '1986', '...', 8.1);
  movies: FilmZoekResultaat = new FilmZoekResultaat(1, 0, 0, []);

  showNumbers = false;
  showPictures = true;
  zoekString: string;
  selected: Movie;

  constructor(private theMovieDbService: TheMovieDBService, private route?: ActivatedRoute) { } //add routing

  // zoek(zoekString: string) {
  //   //console.log(zoekString);
  //   this.movies = this.theMovieDbService.getData(zoekString);
  // }



  zoek(page = 1) {
    this.theMovieDbService.getData(this.zoekString, page).subscribe(result => {
      this.movies = result;
    });
  }

  showPics (){
    this.showPictures = !this.showPictures;
  }



  ngOnInit(): void {
    const map = this.route.snapshot.paramMap;
    if (map.has('searchString')){
      const searchVar = map.get('searchString');
      if (isNaN(Number(searchVar))) {
        this.zoekString = searchVar;
        this.zoek();
      } else {
        this.theMovieDbService.getDetails(Number(searchVar)).subscribe(result => {
          this.movies = new FilmZoekResultaat(1, 1, 1, [ result ]);
          this.selected = result;
          this.zoekString = result.title;
        });
      }
    }

  }



}
