import * as O from 'fp-ts/Option'
export const empty = <T>(list: ReadonlyArray<T>):boolean=> list.length === 0;
export const head = <T>(list: ReadonlyArray<T>): O.Option<T> => (empty(list) ? O.none : O.some(list[0]));
export const tail = <T>(list: ReadonlyArray<T>): O.Option<ReadonlyArray<T>> => 
    empty(list) ? O.none : O.some(list.slice(1) as ReadonlyArray<T>);