import { NamesPipe } from './names.pipe';
import {RatingPipe} from "./rating.pipe";
import {WithName} from "./with-name";

describe('NamesPipe', () => {

  let pipe: NamesPipe = null;
  beforeEach(() => {
    pipe = new NamesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('work with null', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('work with empty array', () => {
    expect(pipe.transform([])).toEqual('');
  });

  it('work with filled array', () => {
    let joe: WithName = {name: 'joe'};
    let jane: WithName = {name: 'jane'};
    expect(pipe.transform([joe,jane])).toEqual('joe, jane');
  });

});
