import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SheetList from './SheetList';

describe("SheetList Component", () => {

    const displayData = {
        rows: [
            {
                columns: [
                    {
                        sections: []
                    },
                    {
                        sections: []
                    }
                ]
            }
        ]
    };

    it("multiple sheets should be present", () => {
        const { container } = render(<SheetList displayData={displayData}/>);
        const elements = container.querySelectorAll("section");
        expect(elements.length).toBe(1);
    });
});
