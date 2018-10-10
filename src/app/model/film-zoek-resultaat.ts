import {Movie} from "../model/movie";

export class FilmZoekResultaat {

  constructor(public page: number,
              public total_results: number,
              public total_pages: number,
              public results: Movie[]) { }
}
