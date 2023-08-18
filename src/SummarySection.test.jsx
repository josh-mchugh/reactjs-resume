import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SummarySection from './SummarySection';

describe("SummarySection", () => {

    const props = {
        summary: "Build high quality software."
    };

    it("summary should be in the document", () => {
        render(<SummarySection {...props}/>);
        const element = screen.getByText("Build high quality software.");
        expect(element).toBeInTheDocument();
    });
});
