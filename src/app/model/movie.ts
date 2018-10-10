import { Genre } from './genre';
import { BelongsToCollection } from './belongs-to-collection';
import { ProductionCompany } from './production-company';
import { ProductionCountry } from './production-country';
import { SpokenLanguage } from './spoken-language';

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public overview: string,
    public homepage: string,
    public popularity: number,
    public poster_path: string,
    public backdrop_path: string,
    public belongs_to_collection: BelongsToCollection,
    public budget: number,
    public genres: Genre[],
    public imdb_id: string,
    public original_title: string,
    public original_language: string,
    public production_companies: ProductionCompany[],
    public production_countries: ProductionCountry[],
    public release_date: string,
    public revenue: number,
    public runtime: number,
    public spoken_languages: SpokenLanguage[],
    public status: string,
    public tagline: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number,
    public adult: boolean,
  ) { }
}
