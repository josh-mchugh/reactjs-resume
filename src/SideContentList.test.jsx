import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SideContentList from './SideContentList';

describe("SideContentList Component", () => {

    const CONTAINS_WORD_REGEX = /\w/;
    const CONTAINS_WORDS_REGEX = /\w+\s+(\w+)/;

    describe("templateId should match for NameSection", () => {

        const content = [
            {
                templateId: "nameTemplate",
                data: {
                    name: "John Doe",
                    title: "Web and Graphic Designer"
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<SideContentList sideContent={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("templateId should match for HeaderSection", () => {

        const content = [
            {
                templateId: "headerTemplate",
                data: {
                    title: "SUMMARY",
                    color: "white",
                    margins: "mt-10"
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<SideContentList sideContent={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORD_REGEX);
            expect(elements.length).toBe(1);
        });
    });

    describe("templateId should match for ObjectiveSection", () => {

        const content = [
            {
                templateId: "objectiveTemplate",
                data: {
                    objective: "Create clean and useful web applications"
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<SideContentList sideContent={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("templateId should match for ContactSection", () => {

        const content = [
            {
                templateId: "contactTemplate",
                data: {
                    phone: "(123) 456-8899",
                    email: "info@youremail.com",
                    location: "New York, New York"
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<SideContentList sideContent={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("templateId should match for SocialSection", () => {

        const content = [
            {
                templateId: "socialTemplate",
                data: [
                    {
                        name: "Facebook",
                        icon: "fa-brands fa-facebook",
                        url: "https://facebook.com/profile"
                    }
                ]
            }
        ];

        it("elements should rendered", () => {
            render(<SideContentList sideContent={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORD_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("no match template id", () => {

        const content = [
            {
                templateId: "doesNotExist",
                data : {}
            }
        ];

        it("should render no text", () => {
            render(<SideContentList sideContent={content}/>);
            const elements = screen.queryAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBe(0);
        })
    });
});
