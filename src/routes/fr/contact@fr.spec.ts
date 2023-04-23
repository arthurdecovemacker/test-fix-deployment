import { render, screen, fireEvent } from '@testing-library/svelte';
import contact from './contact@fr.svelte';

describe("Contact page [french]:", () => {
    test("says 'Nous contacter'", () => {
        render(contact);
        const node = screen.queryByText("Nous contacter");
        expect(node).not.toBeNull();
    })
})