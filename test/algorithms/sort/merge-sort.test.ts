import { mergeSort } from "../../../src/algorithms/sort/merge-sort";
describe('mergeSort function', () => {
    test('sorts an array of numbers in ascending order', () => {
        const input = [5, 3, 8, 1, 2, 7, 4, 6];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(mergeSort(input)).toEqual(expected);
    });

    test('sorts an array of strings in ascending order', () => {
        const input = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
        const expected = ['apple', 'banana', 'grape', 'kiwi', 'orange'];
        expect(mergeSort(input)).toEqual(expected);
    });

    test('returns an empty array if input is empty', () => {
        const input = [];
        expect(mergeSort(input)).toEqual([]);
    });

    test('does not modify the original array', () => {
        const input = [5, 3, 8, 1, 2];
        const sortedArray = mergeSort(input);
        expect(sortedArray).not.toBe(input);
    });

    test('works with arrays containing a single element', () => {
        const input = [42];
        expect(mergeSort(input)).toEqual([42]);
    });

    test('works with arrays containing duplicate elements', () => {
        const input = [3, 2, 1, 2, 3, 1];
        const expected = [1, 1, 2, 2, 3, 3];
        expect(mergeSort(input)).toEqual(expected);
    });
});
