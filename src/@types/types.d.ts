export type Node<A> = {
    value: A;
    next: Node<A> | null;

}| null


export type LinkedList<A> = {
    head: Node<A> | null;
    tail: Node<A> | null;
    size: number;
}