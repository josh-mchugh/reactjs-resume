import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NameSection from './NameSection';

describe("NameSection Component", () => {

    const props = {
        name: "Joe Doe",
        title: "Web Developer"
    };

    it("name should be in the document", () => {
        render(<NameSection {...props}/>);
        const element = screen.getByText("Joe Doe");
        expect(element).toBeInTheDocument();
    });

    it("title should be in the document", () => {
        render(<NameSection {...props}/>);
        const element = screen.getByText("Web Developer");
        expect(element).toBeInTheDocument();
    });
});
