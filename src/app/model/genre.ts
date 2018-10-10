import {WithName} from "../with-name";

export class Genre implements WithName {
  constructor(public id: number, public name: string) { }
}
