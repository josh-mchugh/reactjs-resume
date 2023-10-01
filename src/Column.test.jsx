import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Column from './Column';

describe("Column Component", () => {

    const column = {
        class: "column--test",
        sections: [
            {
                name: "test",
                template: "<p>test 1</p>",
                data: {}
            },
            {
                name: "test",
                template: "<p>test 2</p>",
                data: {}
            }
        ]
    };

    it("Column contains class", () => {
        const { container } = render(<Column column={column}/>);
        const elements = container.getElementsByClassName("column--test");
        expect(elements.length).toBe(1);
    });

    it("Renders sections", () => {
        const screen = render(<Column column={column}/>);
        const elements = screen.getAllByText(/test/i);
        expect(elements.length).toBe(2);
    });
});
