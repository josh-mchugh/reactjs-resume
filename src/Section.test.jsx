import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Section from './Section';

describe("Column Component", () => {

    const section = {
        name: "test",
        template: "<p>Hello {{name}}</p>",
        data: {
            name: "John"
        }
    };

    it("Section contains templated text", () => {
        const screen = render(<Section {...section}/>);
        const element = screen.getByText("Hello John");
        expect(element).toBeInTheDocument();
    });

    it("Section name is 'skills' then expect block--active proficiency", () => {
        const section = {
            name: 'skills',
            template: `
                {{#skills}}
                  {{#gauge}}
                    <p>{{.}}</p>
                  {{/gauge}}
                {{/skills}}
            `,
            data: {
                skills: [
                    {
                        name: "tests",
                        proficiency: 2
                    }
                ]
            }
        };

        const screen = render(<Section {...section}/>);
        const elements = screen.getAllByText("block--active");
        expect(elements.length).toBe(2);
    });
});
