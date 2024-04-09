import { LinkedList } from "../../@types/types";
import { Node } from "../../@types/types";

const append = <A>(list: LinkedList<A>, newNode: Node<A>): LinkedList<A> | null => {
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
      list.size++;
      return list;
    }
    let current =  list.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = newNode;
    list.size++;
    list.tail = newNode;
    return list;
};

const empty = <A>(list: LinkedList<A>): boolean =>{
    return list.head === null;
} 
const size = <A>(list: LinkedList<A>):number =>{
  return list.size;
}

const get = <A>(list: LinkedList<A>, index: number): A | null =>{
     if(empty(list)) return null;
    let current = list.head;
    for(let i = 0; i < index; i++){
      current = current!.next;
    }
    
    return  current === null ? null : current.value
}

export {append, empty, get, size}