import { TmdbImagePipe } from './tmdb-image.pipe';
import {NamesPipe} from "./names.pipe";

describe('TmdbImagePipe', () => {
  it('create an instance', () => {
    const pipe = new TmdbImagePipe();
    expect(pipe).toBeTruthy();
  });
  it('transform image paths without size or http', () => {
    expect(new TmdbImagePipe().transform('somefile.jpg'))
      .toEqual('https://image.tmdb.org/t/p/w200/somefile.jpg');
  });
  it('transform image paths with size without http', () => {
    expect(new TmdbImagePipe().transform('somefile.jpg', 200))
      .toEqual('https://image.tmdb.org/t/p/w200/somefile.jpg');
  });
  it('transform image paths without size with http', () => {
    expect(new TmdbImagePipe().transform('http://localhost/somefile.jpg'))
      .toEqual('http://localhost/somefile.jpg');
  });
});
