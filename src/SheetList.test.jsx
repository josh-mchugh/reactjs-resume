import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SheetList from './SheetList';

describe("SheetList Component", () => {

    const displayData = {
        class: "sheet--class",
        rows: []
    };

    it("multiple sheets should be present", () => {
        const { container } = render(<SheetList displayData={displayData}/>);
        const elements = container.querySelectorAll("section");
        expect(elements.length).toBe(1);
    });

    it("sheet contains be found by class", () => {
        const { container } = render(<SheetList displayData={displayData}/>);
        const elements = container.querySelectorAll(".sheet--class");
        expect(elements.length).toBe(1);
    });
});
