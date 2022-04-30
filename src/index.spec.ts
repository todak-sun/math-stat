import {iqr, sum} from './';
import {average, median, percentile, standard, variance, cv, quartiles} from './index';

describe(`Test`, () => {
  it(`sum test`, () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it(`average test`, () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  it(`variance test`, () => {
    console.log(variance([1, 2, 3]));
  });

  it(`standard test`, () => {
    console.log(standard([1, 2, 3]));
  });

  it(`median test`, () => {
    const odd = [1, 2, 3];
    expect(median(odd)).toBe(2);
    expect(odd).toStrictEqual([1, 2, 3]);

    const even = [1, 2, 3, 4];
    expect(median(even)).toBe(2.5);
    expect(even).toStrictEqual([1, 2, 3, 4]);
  });

  it(`percentile`, () => {
    const dataset = [72, 74, 84, 88, 89, 91];
    expect(percentile(50)(dataset)).toBe(86);
    expect(percentile(25)(dataset)).toBe(74);
    expect(percentile(75)(dataset)).toBe(89);
    expect(percentile(50)([37, 38, 38, 38, 39, 40, 40, 41, 42, 43, 44, 44, 45, 78, 61, 62])).toBe(41.5);
    expect(percentile(99)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  });

  it(`iqr test`, () => {
    const dataset = [72, 74, 84, 88, 89, 91];
    expect(iqr(dataset)).toBe(15);
  });

  it(`cv test`, () => {
    console.log(cv([76300, 77400, 77900, 77200, 76900, 78800]));
  });

  it(`quartiles test`, () => {
    console.log(
      quartiles([42, 40, 38, 37, 43, 39, 78, 38, 45, 44, 40, 38, 41, 62, 61, 44])
    )
    
  });
});
