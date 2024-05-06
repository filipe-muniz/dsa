import {LinkedList} from "../../src/data-structures/list/LinkedList"
describe("LinkedList functions", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
    });

    test("append should add a new node to the end of the list", () => {
        expect(list.emptyP()).toBe(true); // Verify if the list is initially empty

        // Add some nodes to the list
        list.append({ value: 1, next: null });
        list.append({ value: 2, next: null });
        list.append({ value: 3, next: null });

        // Verify if the list contains the added nodes correctly
        expect(list.head!.value).toBe(1);
        expect(list.head!.next!.value).toBe(2);
        expect(list.head!.next!.next!.value).toBe(3);
    });

    test("emptyP should return true if the list is empty", () => {
        expect(list.emptyP()).toBe(true); // Verify if the list is initially empty

        // Add a node to the list
        list.append({ value: 1, next: null });

        expect(list.emptyP()).toBe(false); // Verify if the list is not empty anymore
    });

    test("get should return the value at the specified index", () => {
        // Add some nodes to the list
        list.append({ value: 1, next: null });
        list.append({ value: 2, next: null });
        list.append({ value: 3, next: null });

        // Verify if the returned values are correct
        expect(list.get(0)).toBe(1);
        expect(list.get(1)).toBe(2);
        expect(list.get(2)).toBe(3);

        // Verify if null is returned for indexes outside the list's bounds
        expect(list.get(3)).toBe(null);
    });

    test("getSize should return the number of nodes in the list", () => {
        expect(list.getSize()).toBe(0); // Verify if the list is initially empty

        // Add some nodes to the list
        list.append({ value: 1, next: null });
        list.append({ value: 2, next: null });
        list.append({ value: 3, next: null });

        expect(list.getSize()).toBe(3); // Verify if the list size is correct after adding nodes
    });
});
