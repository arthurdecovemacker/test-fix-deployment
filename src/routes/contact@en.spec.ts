import { render, screen } from '@testing-library/svelte';
import contact from './contact@en.svelte';

describe("Contact page [english]:", () => {
    test("says 'Contact us'", () => {
        render(contact);
        const node = screen.queryByText("Contact us");
        expect(node).not.toBeNull();
    })
})