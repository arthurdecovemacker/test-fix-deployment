import { render, screen, fireEvent } from '@testing-library/svelte';
import download from './download@en.svelte';

describe("Download page [english]:", () => {
    test("says 'Download DEDAL'", () => {
        render(download);
        const node = screen.queryByText("Download DEDAL");
        expect(node).not.toBeNull();
    })
    test("says 'Take your backpacker's guide 2.0 with you on your device.'", () => {
        render(download);
        const node = screen.queryByText("Take your backpacker's guide 2.0 with you on your device.");
        expect(node).not.toBeNull();
    })
    test("it has a button with the text 'Download'", async () => {
        render(download);
        const button = screen.getByText("Download");
        expect(button).not.toBeNull();
    });

    test("when the 'Download' button is pressed it should open a popup with 'Thanks you for download DEDAL'", async () => {
        render(download);
        const button = screen.getByText("Download");
        await fireEvent.click(button);
        expect(screen.getByText("Thanks you for download DEDAL")).not.toBeNull();
    });
    
    test("when the 'Download' button is pressed it should download DEDAL's APK", async () => {
        render(download);
        const button = screen.getByText("Download");
        await fireEvent.click(button);
    });
})