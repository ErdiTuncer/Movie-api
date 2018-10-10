import {WithName} from "../with-name";

export class SpokenLanguage implements WithName {
  constructor(public iso_639_1: string, public name: string) { }
}
