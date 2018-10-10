import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number, showNumbers?: boolean): string {
    if (!value) {
      return 'not yet rated';
    } else if (showNumbers) {
      return value.toString();
    } else if (value >= 8) {
      return 'Great';
    } else if (value >= 7) {
      return 'Good';
    } else if (value >= 5.5) {
      return 'Ok';
    } else {
      return 'Bad';
    }
  }

}
