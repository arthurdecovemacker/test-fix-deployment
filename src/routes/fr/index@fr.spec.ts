import { render, screen, fireEvent } from '@testing-library/svelte';
import index from './index@fr.svelte';

describe("Index page [french]:", () => {
    test("says 'Mais qu'est-ce que DEDAL?'", () => {
        render(index);
        const node = screen.queryByText("Mais qu'est-ce que DEDAL?");
        expect(node).not.toBeNull();
    })
})