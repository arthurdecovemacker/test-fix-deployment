import { render, screen } from '@testing-library/svelte';
import index from './index@en.svelte';

describe("Index page [english]:", () => {
    test("says 'What's DEDAL?'", () => {
        render(index);
        const node = screen.queryByText("What's DEDAL?");
        expect(node).not.toBeNull();
    })
})