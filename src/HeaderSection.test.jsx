import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeaderSection from './HeaderSection';

describe("HeaderSection Component", () => {

    const props = {
        margins: "mt-10",
        title: "SOCIALS",
        color: "white"
    };

    it("title should be in the document", () => {
        render(<HeaderSection {...props}/>);
        const element = screen.getByText("SOCIALS");
        expect(element).toBeInTheDocument();
    });

    it("margins to be present in the document", () => {
        const {container} = render(<HeaderSection {...props}/>);
        const element = container.querySelector(".mt-10");
        expect(element).toBeInTheDocument();
    });

    it("border-color should be in the document", () => {
        const { container } = render(<HeaderSection {...props}/>);
        const element = container.querySelector(".border-white");
        expect(element).toBeInTheDocument();
    });
});
