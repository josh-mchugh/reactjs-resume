import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ObjectiveSection from './ObjectiveSection';

describe("ObjectiveSection", () => {

    const props = {
        objective: "Build high quality software."
    };

    it("objective should be in the document", () => {
        render(<ObjectiveSection {...props}/>);
        const element = screen.getByText("Build high quality software.");
        expect(element).toBeInTheDocument();
    });
});
