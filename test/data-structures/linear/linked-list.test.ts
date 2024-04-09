import { LinkedList} from "../../../src/@types/types";
import {append, get, size, empty} from "../../../src/data-structures/linear/LinkedList";

describe("LinkedList functions", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = { head: null, tail: null, size: 0 };
    });

    test("append should add a new node to the end of the list", () => {
        expect(empty(list)).toBe(true); // Verifica se a lista está vazia inicialmente

        // Adiciona alguns nós à lista
        append(list, { value: 1, next: null });
        append(list, { value: 2, next: null });
        append(list, { value: 3, next: null });

        // Verifica se a lista contém os nós adicionados corretamente
        expect(list.head!.value).toBe(1);
        expect(list.head!.next!.value).toBe(2);
        expect(list.head!.next!.next!.value).toBe(3);
    });

    test("empty should return true if the list is empty", () => {
        expect(empty(list)).toBe(true); // Verifica se a lista está vazia inicialmente

        // Adiciona um nó à lista
        append(list, { value: 1, next: null });

        expect(empty(list)).toBe(false); // Verifica se a lista não está mais vazia
    });

    test("get should return the value at the specified index", () => {
        // Adiciona alguns nós à lista
        append(list, { value: 1, next: null });
        append(list, { value: 2, next: null });
        append(list, { value: 3, next: null });

        // Verifica se os valores retornados estão corretos
        expect(get(list, 0)).toBe(1);
        expect(get(list, 1)).toBe(2);
        expect(get(list, 2)).toBe(3);

        // Verifica se null é retornado para índices fora dos limites da lista
        expect(get(list, 3)).toBe(null);
    });

    test("size should return the number of nodes in the list", () => {
        expect(size(list)).toBe(0); // Verifica se a lista está vazia inicialmente

        // Adiciona alguns nós à lista
        append(list, { value: 1, next: null });
        append(list, { value: 2, next: null });
        append(list, { value: 3, next: null });

        expect(size(list)).toBe(3); // Verifica se o tamanho da lista está correto após adicionar nós
    });
});