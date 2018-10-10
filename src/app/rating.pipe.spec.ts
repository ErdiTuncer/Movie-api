import { RatingPipe } from './rating.pipe';

describe('RatingPipe', () => {
  const pipe = new RatingPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('8+ is great', () => {
    expect(pipe.transform(8)).toEqual('Great');
  });
  it('7+ is good', () => {
    expect(pipe.transform(7.9)).toEqual('Good');
    expect(pipe.transform(7)).toEqual('Good');
  });
  it('5.5+ is ok', () => {
    expect(pipe.transform(6.9)).toEqual('Ok');
    expect(pipe.transform(5.5)).toEqual('Ok');
  });
  it('5.4- is bad', () => {
    expect(pipe.transform(5.4)).toEqual('Bad');
    expect(pipe.transform(0.1)).toEqual('Bad');
  });
  it('0 is not rated', () => {
    expect(pipe.transform(0)).toEqual('not yet rated');
  }); it('undefined is not rated', () => {
    expect(pipe.transform(undefined)).toEqual('not yet rated');
  });
  it('when showing numbers, the number is returned', () => {
    expect(pipe.transform(7.9, true)).toEqual('7.9');
  });
});
