import { binarySearch, binarySearchIterative} from '../../../src/algorithms/search/binary-search';
import { Comparable } from '../../../src/@types/types';
describe('binarySearch', () => {
    type BinarySearch = (arr: Comparable[], target: Comparable) => number | null
  
    const runTest = (binarySearch: BinarySearch) => {
      it('does not find target in an empty array', () => {
        const array: number[] = []
        expect(binarySearch(array, 1)).toBe(null)
      })
  
      describe('array with odd number of elements', () => {
        const arrayNums: number[] = [2, 5, 8.1, 9, 30.234, 42, 121]
  
        it('does not find target', () => {
          expect(binarySearch(arrayNums, 1)).toBe(null) // nonexistent target less than min element
          expect(binarySearch(arrayNums, 121.2)).toBe(null) // nonexistent target greater than max element
          expect(binarySearch(arrayNums, 5.1)).toBe(null) // nonexistent target between min and max elements
        })
  
        it('finds target when it exists in array', () => {
          expect(binarySearch(arrayNums, 5)).toBe(1)
        })
      })
  
      describe('array with even number of elements', () => {
        const arrayNums: number[] = [2, 5, 8.1, 30.234, 42, 121]
  
        it('finds target when it exists in array', () => {
          expect(binarySearch(arrayNums, 30.234)).toBe(3)
        })
      })
  
      describe('array of strings', () => {
        const arrayStrs: string[] = [
          'reappear',
          'rearrange',
          'redo',
          'regroup',
          'remake',
          'replay',
          'rewrite',
        ]
  
        it('finds word when it exists in array', () => {
          expect(binarySearch(arrayStrs, 'replay')).toBe(5)
        })
  
        it('does not find word when it is not in array', () => {
          expect(binarySearch(arrayStrs, '')).toBe(null)
          expect(binarySearch(arrayStrs, 'rewrote')).toBe(null)
          expect(binarySearch(arrayStrs, 'rearranged')).toBe(null)
        })
      })
    }
  
    describe('iterative method', () => runTest(binarySearchIterative))
    describe('recursive method', () => runTest(binarySearch))
  })