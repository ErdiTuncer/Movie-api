import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmdbImage'
})
export class TmdbImagePipe implements PipeTransform {
  static tmdbImageUrl = 'https://image.tmdb.org/t/p/w';

  transform(value: string, size = 200): string {
    if (!value || value.startsWith('http')) {
      return value;
    } return `${TmdbImagePipe.tmdbImageUrl + size}/${value}`;
  }
}
