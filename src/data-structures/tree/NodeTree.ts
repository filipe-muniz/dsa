class NodeTree<T>{
    value: T
    left: NodeTree<T> | null
    right: NodeTree<T> | null

    constructor(value){
        this.value = value;
        this.left = null
        this.right = null;
    }
}