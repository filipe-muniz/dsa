
export class LinkedList<A> {
  head: ListNode<A> | null;
  tail: ListNode<A> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(newNode: ListNode<A>): void {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  emptyP(): boolean {
    return this.head === null;
  }

  getSize(): number {
    return this.size;
  }

  get(index: number): A | null {
    if (this.emptyP() || index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current === null ? null : current.value;
  }
}
