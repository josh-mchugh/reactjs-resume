import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InterestSection from './InterestSection';

describe("Interest Component", () => {

    const interests = [
        "Reading books on the weekend with a nice cup of tea",
        "Walks through the park before sunset",
    ];

    it("expect list items to match interest length", () => {
        render(<InterestSection interests={interests}/>);
        const elements = screen.getAllByRole("listitem");
        expect(elements.length).toBe(2);
    });

    it("reading interests should be present", () => {
        render(<InterestSection interests={interests}/>);
        const element = screen.getByText("Reading books on the weekend with a nice cup of tea");
        expect(element).toBeInTheDocument();
    });

    it("walks interets should be present", () => {
        render(<InterestSection interests={interests}/>);
        const element = screen.getByText("Walks through the park before sunset");
        expect(element).toBeInTheDocument();
    });
});
