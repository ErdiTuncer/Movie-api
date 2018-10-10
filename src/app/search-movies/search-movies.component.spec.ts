import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { TheMovieDBService } from '../the-movie-db.service';
import { SearchMoviesComponent } from './search-movies.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TmdbImagePipe} from "../tmdb-image.pipe";
import {RatingPipe} from "../rating.pipe";
import {NamesPipe} from "../names.pipe";
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {FilmDetailsComponent} from "../film-details/film-details.component";
import { Movie } from "../model/movie";


describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;

  it('should create', () => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ SearchMoviesComponent, TmdbImagePipe, RatingPipe, NamesPipe, FilmDetailsComponent ],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({}) } } }, { provide: TheMovieDBService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('search for movies like shrek', ()  => {
    let httpMock: HttpTestingController;
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ SearchMoviesComponent, TmdbImagePipe, RatingPipe, NamesPipe, FilmDetailsComponent ],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({'searchString': 'shrek'}) } } }, { provide: TheMovieDBService }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
    //const expectedUrl = service.zoekUrl + '?api_key=' + service.apiKey + '&query=shrek&page=1';
    const url =  'https://api.themoviedb.org/3/search/movie?api_key=4551483fa0da633eaffefbb807ac1d55&query=shrek&page=1';
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush({
        "page": 1,
        "total_results": 10,
        "total_pages": 1,
        "results": [
          {
            "vote_count": 5317,
            "id": 808,
            "video": false,
            "vote_average": 7.4,
            "title": "Shrek",
            "popularity": 54.017262,
            "poster_path": "\/140ewbWv8qHStD3mlBDvvGd0Zvu.jpg",
            "original_language": "en",
            "original_title": "Shrek",
            "genre_ids": [
              12,
              16,
              35,
              10751,
              14
            ],
            "backdrop_path": "\/wBG4kHfhwm3bLwKUFNRByXXv4r2.jpg",
            "adult": false,
            "overview": "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
            "release_date": "2001-05-16"
          },
          {
            "vote_count": 3940,
            "id": 809,
            "video": false,
            "vote_average": 6.8,
            "title": "Shrek 2",
            "popularity": 55.955539,
            "poster_path": "\/akWDA0BMVYK4OTM92T5i91DYnsT.jpg",
            "original_language": "en",
            "original_title": "Shrek 2",
            "genre_ids": [
              12,
              16,
              35,
              10751,
              14
            ],
            "backdrop_path": "\/nJ0TsLEeht6y30AMryc4ElQ8gzp.jpg",
            "adult": false,
            "overview": "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
            "release_date": "2004-05-19"
          },
          {
            "vote_count": 2481,
            "id": 10192,
            "video": false,
            "vote_average": 6,
            "title": "Shrek Forever After",
            "popularity": 43.918832,
            "poster_path": "\/enqVwbUu6OX5LHq0fuk7sLT35zy.jpg",
            "original_language": "en",
            "original_title": "Shrek Forever After",
            "genre_ids": [
              35,
              12,
              14,
              16,
              10751
            ],
            "backdrop_path": "\/aD8iOuLlEiMfVlHTnAe15fZLo0S.jpg",
            "adult": false,
            "overview": "A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Away—where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never met—he sets out to restore his world and reclaim his true love.",
            "release_date": "2010-05-16"
          },
          {
            "vote_count": 2900,
            "id": 810,
            "video": false,
            "vote_average": 6,
            "title": "Shrek the Third",
            "popularity": 40.711821,
            "poster_path": "\/lA17Mlz8hXVZsW5Y3WuUa8KPilQ.jpg",
            "original_language": "en",
            "original_title": "Shrek the Third",
            "genre_ids": [
              14,
              12,
              16,
              35,
              10751
            ],
            "backdrop_path": "\/7fT1IogBbxM6S7SOIGSe7BXLEMq.jpg",
            "adult": false,
            "overview": "The King of Far Far Away has died and Shrek and Fiona are to become King &amp; Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.",
            "release_date": "2007-05-17"
          },
          {
            "vote_count": 225,
            "id": 13394,
            "video": false,
            "vote_average": 5.9,
            "title": "Shrek the Halls",
            "popularity": 9.194187,
            "poster_path": "\/zq8UaoqVgpwOVOW1xfIYUekgyNl.jpg",
            "original_language": "en",
            "original_title": "Shrek the Halls",
            "genre_ids": [
              12,
              16,
              35,
              14,
              10751
            ],
            "backdrop_path": "\/hWwFGzPWmONZa6fFMk2uLLOnhmJ.jpg",
            "adult": false,
            "overview": "The Christmas tree isn't the only thing green in this new holiday classic. Shrek is back and trying to get into the spirit of the season. After promising Fiona and the kids a Christmas they'll remember, he is forced to take a crash course in the holiday. But just when he thinks he has everything for their quiet family Christmas just right, there is a knock at the door.",
            "release_date": "2007-11-28"
          },
          {
            "vote_count": 0,
            "id": 421892,
            "video": false,
            "vote_average": 0,
            "title": "Shrek 5",
            "popularity": 2.858947,
            "poster_path": "\/aXIvXhFWQAhLOLj0G5ucoQhRaFA.jpg",
            "original_language": "en",
            "original_title": "Shrek 5",
            "genre_ids": [
              12,
              16,
              35
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "",
            "release_date": "2019-08-01"
          },
          {
            "vote_count": 100,
            "id": 48466,
            "video": false,
            "vote_average": 6.3,
            "title": "Scared Shrekless",
            "popularity": 6.317012,
            "poster_path": "\/tDoLNXLKoEUoLOL0FPjpBE0SGaV.jpg",
            "original_language": "en",
            "original_title": "Scared Shrekless",
            "genre_ids": [
              16,
              35
            ],
            "backdrop_path": "\/w6LakNLInxevoDbq3chl4huqpUl.jpg",
            "adult": false,
            "overview": "Shrek challenges Donkey, Puss in Boots and his other fairy tale character friends to spend the night in Lord Farquaad's haunted castle, telling scary stories to see who can resist becoming scared and stay the longest.",
            "release_date": "2010-10-28"
          },
          {
            "vote_count": 33,
            "id": 128914,
            "video": true,
            "vote_average": 6.6,
            "title": "Shrek's Thrilling Tales",
            "popularity": 3.847535,
            "poster_path": "\/eZeF8bAXNlzaUHsNfhvXqrUml6.jpg",
            "original_language": "en",
            "original_title": "Shrek's Thrilling Tales",
            "genre_ids": [
              35,
              10751,
              16
            ],
            "backdrop_path": "\/x5xY0X9bOuGkxZDfS4ShSh0Mdqg.jpg",
            "adult": false,
            "overview": "SHREK'S THRILLING TALES is the ultimate Halloween DVD compilation for your family. Shrek's Thrilling Tales review Featuring the scariest, ugliest, and funniest characters from DreamWorks Animation's successful SHREK and MONSTERS VS. ALIENS franchises.",
            "release_date": "2012-08-28"
          },
          {
            "vote_count": 5,
            "id": 252634,
            "video": true,
            "vote_average": 6.6,
            "title": "Shrek Stories",
            "popularity": 1.389868,
            "poster_path": "\/uxT16GDMdm6e5tw6tBv0KHq7riP.jpg",
            "original_language": "en",
            "original_title": "Shrek Stories",
            "genre_ids": [],
            "backdrop_path": null,
            "adult": false,
            "overview": "Join Shrek and his friends from Far Far Away as they share tales of holiday cheer, spooky stories, a singing showdown and a night of babysitting nobody will soon forget.",
            "release_date": "2013-10-01"
          },
          {
            "vote_count": 12,
            "id": 381696,
            "video": false,
            "vote_average": 6.8,
            "title": "Shrek the Musical",
            "popularity": 1.919588,
            "poster_path": "\/6I9zvWp2mUvbAKJuzgabGC4n0D7.jpg",
            "original_language": "en",
            "original_title": "Shrek the Musical",
            "genre_ids": [
              35,
              10402,
              14
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "Make room for ogre-sized family fun as the greatest fairy tale never told comes to life in a whole new way in this breathtaking Broadway musical adaptation of the hit movie Shrek!",
            "release_date": "2013-09-17"
          },
          {
            "vote_count": 25,
            "id": 26840,
            "video": false,
            "vote_average": 5.1,
            "title": "Shrek in the Swamp Karaoke Dance Party",
            "popularity": 2.97565,
            "poster_path": "\/qaq6J6sQSaD0e2l97QFz5BIk16i.jpg",
            "original_language": "en",
            "original_title": "Shrek in the Swamp Karaoke Dance Party",
            "genre_ids": [
              16,
              35,
              10402
            ],
            "backdrop_path": "\/ZuIDOF96oISC7I9gW4oLS9Pcca.jpg",
            "adult": false,
            "overview": "Shrek and his friends enjoy themselves with some Karaoke partying.",
            "release_date": "2001-01-01"
          },
          {
            "vote_count": 49,
            "id": 25523,
            "video": false,
            "vote_average": 5.3,
            "title": "The Ghost of Lord Farquaad",
            "popularity": 4.507334,
            "poster_path": "\/uKXKKmTcubYN8PGqox8NMlPpAqK.jpg",
            "original_language": "en",
            "original_title": "The Ghost of Lord Farquaad",
            "genre_ids": [
              14,
              16,
              35,
              878,
              10751
            ],
            "backdrop_path": "\/xpQ2LmhlY5ds1fSlCEwPfAN0vrm.jpg",
            "adult": false,
            "overview": "Lord Farquaad was eaten by the dragon, but his ghost has returned, and he's still evil. With the help of his henchman, Thelonious, he kidnaps Fiona. Shrek and the donkey set out to save her, with help from the dragon, before she goes over a waterfall on a raft.",
            "release_date": "2003-05-23"
          },
          {
            "vote_count": 7,
            "id": 118249,
            "video": false,
            "vote_average": 5.4,
            "title": "Thriller Night",
            "popularity": 2.20875,
            "poster_path": "\/rczxG8XQTmo9DqIh9fRN1SJp7s6.jpg",
            "original_language": "en",
            "original_title": "Thriller Night",
            "genre_ids": [
              16
            ],
            "backdrop_path": "\/60cnELvjm8sTcmi9XUGNg2Z1TG5.jpg",
            "adult": false,
            "overview": "A Shrek parody of Michael Jackson's Thriller song and music video, with Donkey singing.",
            "release_date": "2011-09-13"
          },
          {
            "vote_count": 1,
            "id": 332919,
            "video": false,
            "vote_average": 0.5,
            "title": "Grey Met Shrek",
            "popularity": 1.51177,
            "poster_path": "\/zwj8p42FHhZgznRvl6uGBEobMiW.jpg",
            "original_language": "cn",
            "original_title": "奇緣灰姑娘",
            "genre_ids": [
              35
            ],
            "backdrop_path": "\/wgtvRVGNDCA84lzemprIcri3qCY.jpg",
            "adult": false,
            "overview": "Grey is an office worker with a bit of a shopping addiction. One day, just after being fired, she comes across a gorgeous pair of shoes that she couldn‘t possibly afford. Before she fully understood what she was doing, she‘s stolen the shoes, and in a desperate bid to escape, she climbs into a truck. As fate would have it, the truck is also a stolen good, and the person who stole it is none other than the person currently driving it, small-time crook Shrek.",
            "release_date": "2014-11-06"
          },
          {
            "vote_count": 3,
            "id": 151316,
            "video": false,
            "vote_average": 3.3,
            "title": "Shrek’s Yule Log",
            "popularity": 1.430685,
            "poster_path": "\/6PTP8gOWblb3RiU39K1Dnujs3qq.jpg",
            "original_language": "en",
            "original_title": "Shrek’s Yule Log",
            "genre_ids": [],
            "backdrop_path": "\/qZjzB60ZP3tUwZ5lAGeYU8r5JEv.jpg",
            "adult": false,
            "overview": "“Shrek’s Yule Log,” featuring over 25 uproarious character appearances in front of a crackling virtual fireplace.  This was bundled with \"Donkey's Christmas Shrektacular\"",
            "release_date": "2010-12-07"
          },
          {
            "vote_count": 2,
            "id": 286488,
            "video": true,
            "vote_average": 8.5,
            "title": "Dreamworks Holiday Classics (Merry Madagascar \/ Shrek the Halls \/ Gift of the Night Fury)",
            "popularity": 1.226758,
            "poster_path": "\/lcNYmrZqOp08PqGcWTC2CSvigLa.jpg",
            "original_language": "en",
            "original_title": "Dreamworks Holiday Classics (Merry Madagascar \/ Shrek the Halls \/ Gift of the Night Fury)",
            "genre_ids": [
              10751
            ],
            "backdrop_path": "\/n0E9bawEskvCzL98Abe81AGnqj.jpg",
            "adult": false,
            "overview": "These little short videos are like hors d'oevres (sp?). They leave you wanting a full movie of each. My favorite and the reason to keep this blu-ray is the one that is not listed - the penguins - Private goes looking for a gift for the polar bear. Hilarious. Madagascar is good as always and How to train your dragon is fun. A keeper, as is anything with the penguins in my book. I gave it a 4 since they are all too short to feel satisfied.",
            "release_date": "2012-10-30"
          },
          {
            "vote_count": 46,
            "id": 51256,
            "video": false,
            "vote_average": 5.3,
            "title": "Donkey's Christmas Shrektacular",
            "popularity": 4.500102,
            "poster_path": "\/nCY8sIOvcIdtk1qJmbr8DkxA3oM.jpg",
            "original_language": "en",
            "original_title": "Donkey's Christmas Shrektacular",
            "genre_ids": [
              14,
              16,
              18,
              35,
              878,
              10751
            ],
            "backdrop_path": "\/neoak3j0EsdYhIDjDICwKJh0Gdt.jpg",
            "adult": false,
            "overview": "Deck the halls with Donkey’s laughter in this all-new holiday collection. Donkey presents his very own carolling stage show featuring his Far Far Away pals in this merry, musical treat with all the trimmings! Join in the fun as they bring their own Shrektacular spirit to festive holiday songs, a fun Donkey Decoration scramble, and a hilarious virtual Yule Log that’s so funny… it’s on fire.",
            "release_date": "2010-12-07"
          },
          {
            "vote_count": 15,
            "id": 82530,
            "video": false,
            "vote_average": 6.3,
            "title": "The Pig Who Cried Werewolf",
            "popularity": 2.93302,
            "poster_path": "\/oDTTjuDcq4leQvakS6rmwkoVVNZ.jpg",
            "original_language": "en",
            "original_title": "The Pig Who Cried Werewolf",
            "genre_ids": [
              16
            ],
            "backdrop_path": "\/xqgZojOKp0pDCBk5KdT2vXrkjce.jpg",
            "adult": false,
            "overview": "Of the famous Three Little Pigs, Heimlich is the one porker who finds a conspiracy around every corner. When The Big Bad Wolf moves in next door, Heimlich tries to warn his piggy pals Horst and Dieter that this may not bring a fairy-tale ending. Tired of hearing him 'cry wolf,' they ignore Heimlich's warnings until it's almost too late for them to live happily ever after. The chase is on!",
            "release_date": "2011-10-04"
          },
          {
            "vote_count": 65,
            "id": 58508,
            "video": false,
            "vote_average": 6.2,
            "title": "Far Far Away Idol",
            "popularity": 5.036456,
            "poster_path": "\/jJzeLHgDalYkNwVN7sj4tp0b4Tp.jpg",
            "original_language": "it",
            "original_title": "Far Far Away Idol",
            "genre_ids": [
              10402,
              35,
              16
            ],
            "backdrop_path": "\/lULD7I0Vy3yzZdPmszAC5MFPJd8.jpg",
            "adult": false,
            "overview": "Far Far Away Idol is a Dreamworks Animation SKG short film, and an alternate ending to Shrek 2. It is included on the Shrek 2 DVD and VHS. The story takes place after Shrek 2.",
            "release_date": "2004-11-05"
          },
          {
            "vote_count": 131,
            "id": 83201,
            "video": false,
            "vote_average": 6.6,
            "title": "Puss in Boots: The Three Diablos",
            "popularity": 7.522824,
            "poster_path": "\/3L1fUwF4RbnMIvXOt0KYFFwfm2y.jpg",
            "original_language": "en",
            "original_title": "Puss in Boots: The Three Diablos",
            "genre_ids": [
              12,
              16,
              35,
              10751
            ],
            "backdrop_path": "\/f6Y2FXfowesJj4b62geo12355U9.jpg",
            "adult": false,
            "overview": "Puss in Boots is on a mission to recover the Princess' stolen ruby from the notorious French thief, Whisperer. Reluctantly accompanied by three little kittens, Three Diablos, Puss must tame them before they endanger the mission.",
            "release_date": "2012-02-24"
          }
        ]
      }
    ); // shrek() is a method returning json);

    expect(component).toBeTruthy();
  });



  it('search for movie details', ()  => {
    let httpMock: HttpTestingController;
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ SearchMoviesComponent, TmdbImagePipe, RatingPipe, NamesPipe, FilmDetailsComponent ],
      providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({'searchString': 83201}) } } }, { provide: TheMovieDBService }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
    //const expectedUrl = service.zoekUrl + '?api_key=' + service.apiKey + '&query=shrek&page=1';
    const url =  'https://api.themoviedb.org/3/movie/83201?api_key=4551483fa0da633eaffefbb807ac1d55';
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush({
        "adult": false,
        "backdrop_path": "/f6Y2FXfowesJj4b62geo12355U9.jpg",
        "belongs_to_collection": {
          "id": 94602,
          "name": "Puss in Boots Collection",
          "poster_path": "/anHwj9IupRoRZZ98WTBvHpTiE6A.jpg",
          "backdrop_path": "/feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg"
        },
        "budget": 0,
        "genres": [
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 10751,
            "name": "Family"
          }
        ],
        "homepage": "",
        "id": 83201,
        "imdb_id": "tt2268617",
        "original_language": "en",
        "original_title": "Puss in Boots: The Three Diablos",
        "overview": "Puss in Boots is on a mission to recover the Princess' stolen ruby from the notorious French thief, Whisperer. Reluctantly accompanied by three little kittens, Three Diablos, Puss must tame them before they endanger the mission.",
        "popularity": 4.579297,
        "poster_path": "/3L1fUwF4RbnMIvXOt0KYFFwfm2y.jpg",
        "production_companies": [
          {
            "name": "DreamWorks Animation",
            "id": 521
          }
        ],
        "production_countries": [
          {
            "iso_3166_1": "US",
            "name": "United States of America"
          }
        ],
        "release_date": "2012-02-24",
        "revenue": 0,
        "runtime": 13,
        "spoken_languages": [
          {
            "iso_639_1": "en",
            "name": "English"
          }
        ],
        "status": "Released",
        "tagline": "",
        "title": "Puss in Boots: The Three Diablos",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 134
      }
    ); // shrek() is a method returning json);

    expect(component).toBeTruthy();
  });
});
