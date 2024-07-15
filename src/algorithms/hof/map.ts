export const map = <T, U>(fn: (element :T) =>U, list: ReadonlyArray<T>): ReadonlyArray<U> =>{
        const newList: U[]= [];
        for(let element of list){
            newList.push(fn(element));
        }
        return newList as ReadonlyArray<U>;
}
