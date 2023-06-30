import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

describe("ContactSection Component", () => {

    const props = {
        phone: "(555) 555-5555",
        email: "test@test.test",
        location: "Boston, MA"
    };

    it("list should be in the document", () => {
        render(<ContactSection {...props}/>);
        const element = screen.getByRole("list");
        expect(element).toBeInTheDocument();
    });

    it("list items should be in the document", () => {
        render(<ContactSection {...props}/>);
        const elements = screen.getAllByRole("listitem");
        expect(elements.length).toBe(3);
    });

    it("phone number should be in the document", () => {
        render(<ContactSection {...props}/>);
        const element = screen.getByText("(555) 555-5555");
        expect(element).toBeInTheDocument();
    });

    it("email should be in the document", () => {
        render(<ContactSection {...props}/>);
        const element = screen.getByText("test@test.test");
        expect(element).toBeInTheDocument();
    });

    it("location should be in the document", () => {
        render(<ContactSection {...props}/>);
        const element = screen.getByText("Boston, MA");
        expect(element).toBeInTheDocument();
    });
});
