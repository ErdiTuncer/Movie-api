import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TheMovieDBService } from '../the-movie-db.service';
import { Movie } from "../model/movie";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  providers: [ TheMovieDBService ],


})
export class FilmDetailsComponent implements OnInit {

  //movie input from outside
  @Input() movie: Movie; // @Input() wordt een [attribuut] in <app-film-details>

  // output, make it usefull outside this componement
  @Output() close = new EventEmitter(); // @Output wordt een (event) in <app-film-details>

  constructor(private theMovieDbService: TheMovieDBService) { }

  closeMe() {
    this.close.emit(); // kan een waarde meekrijgen
  }

  ngOnInit() {
    this.theMovieDbService.getDetails(this.movie.id).subscribe(result => {
      this.movie = result;
    });
  }
}
