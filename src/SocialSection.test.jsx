import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SocialSection from './SocialSection';

describe("SocialSection Component", () => {

    const socials = [
        {
            icon: "fa-twitter",
            name: "Twitter",
            url: "https://twitter.com/profile"
        }
    ];

    it("social name should be in the document", () => {
        render(<SocialSection socials={socials}/>);
        const element = screen.getByText("Twitter:");
        expect(element).toBeInTheDocument();
    });

    it("social url should be in the document", () => {
        render(<SocialSection socials={socials}/>);
        const element = screen.getByText("https://twitter.com/profile");
        expect(element).toBeInTheDocument();
    });

    it("social icon should be present in document", () => {
        const { container } = render(<SocialSection socials={socials}/>);
        const element = container.querySelector(".fa-twitter");
        expect(element).toBeInTheDocument();
    });
});
