import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Row from './Row';

describe("Row Component", () => {

    const row = {
        class: "row--test",
        columns: [
            {
                class: "column--test",
                sections: []
            },
            {
                class: "column--test",
                sections: []
            }
        ]
    };

    it("Row contains class", () => {
        const { container } = render(<Row row={row}/>);
        const elements = container.getElementsByClassName("row--test");
        expect(elements.length).toBe(1);
    });

    it("Renders columns", () => {
        const { container } = render(<Row row={row}/>);
        const elements = container.getElementsByClassName("column--test");
        expect(elements.length).toBe(2);
    });
});
