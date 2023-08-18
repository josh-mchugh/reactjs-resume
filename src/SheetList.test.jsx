import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SheetList from './SheetList';

describe("SheetList Component", () => {

    const layout = {
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

    const resume = {}

    it("multiple sheets should be present", () => {
        const { container } = render(<SheetList layout={layout} resume={resume}/>);
        const elements = container.querySelectorAll("section");
        expect(elements.length).toBe(1);
    });
});
