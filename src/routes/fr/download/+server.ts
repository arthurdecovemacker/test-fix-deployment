import { render, screen, fireEvent } from '@testing-library/svelte';
import download from './download@fr.svelte';

describe("Download page [french]:", () => {
    test("says 'Télécharger DEDAL'", () => {
        render(download);
        const node = screen.queryByText("Télécharger DEDAL");
        expect(node).not.toBeNull();
    })
    test("says 'Emmenez votre guide du routard 2.0 sur votre appareil.'", () => {
        render(download);
        const node = screen.queryByText("Emmenez votre guide du routard 2.0 sur votre appareil.");
        expect(node).not.toBeNull();
    })
    test("it has a button with the text 'Télécharger'", () => {
        render(download);
        const button = screen.getByText("Télécharger");
        expect(button).not.toBeNull();
    });

    test("when the 'Télécharger' button is pressed it should open a popup with 'Merci d'avoir téléchargé DEDAL'", async () => {
        render(download);
        const button = screen.getByText("Télécharger");
        await fireEvent.click(button);
        expect(screen.getByText("Merci d'avoir téléchargé DEDAL")).not.toBeNull();
    });
    
    test("when the 'Télécharger' button is pressed it should download DEDAL's APK", async () => {
        render(download);
        const button = screen.getByText("Télécharger");
        await fireEvent.click(button);
    });
})