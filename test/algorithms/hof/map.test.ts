import { map } from '../../../src/algorithms/hof/map';

// Função auxiliar para dobrar os valores
const double = (x: number) => x * 2;

// Função auxiliar para converter números em strings
const numberToString = (x: number) => x.toString();

describe('map function tests', () => {
  it('should return an array with doubled values', () => {
    const list = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];
    const result = map(double, list);
    expect(result).toEqual(expected);
  });

  it('should return an array with stringified numbers', () => {
    const list = [1, 2, 3, 4, 5];
    const expected = ['1', '2', '3', '4', '5'];
    const result = map(numberToString, list);
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const list: number[] = [];
    const expected: number[] = [];
    const result = map(double, list);
    expect(result).toEqual(expected);
  });

  it('should return a new array, not a reference to the original', () => {
    const list = [1, 2, 3, 4, 5];
    const result = map(double, list);
    expect(result).not.toBe(list);
  });

  it('should work with different types', () => {
    const list = ['a', 'b', 'c'];
    const toUpperCase = (x: string) => x.toUpperCase();
    const expected = ['A', 'B', 'C'];
    const result = map(toUpperCase, list);
    expect(result).toEqual(expected);
  });
});
