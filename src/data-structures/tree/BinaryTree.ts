export class BinaryTree<T>{
      head: NodeTree<T> | null
      paths: T[]
      constructor(){
        this.head = null;
        this.paths = []
      }
  
}