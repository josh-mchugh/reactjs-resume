import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SheetList from './SheetList';

describe("SheetList Component", () => {


    const props = [
        {
            page: 1,
            sideContent: [],
            content: []
        },
        {
            page: 2,
            sideContent: [],
            content: []
        }
    ];

    it("multiple sheets should be present", () => {
        const { container } = render(<SheetList sheets={props}/>);
        const elements = container.querySelectorAll("section");
        expect(elements.length).toBe(2);
    });
});
