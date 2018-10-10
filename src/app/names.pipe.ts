import { Pipe, PipeTransform } from '@angular/core';
import {WithName} from "./with-name";

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  transform(value: WithName[]): string {
    if (!value) {
      return '';
    }
    return value
      .map(withName => withName.name)
      .join(', ');
  }

}
