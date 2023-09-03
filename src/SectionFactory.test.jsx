import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionFactory from './SectionFactory';

describe("SectionFactory Component", () => {

    const CONTAINS_WORD_REGEX = /\w/;
    const CONTAINS_WORDS_REGEX = /\w+\s+(\w+)/;

    describe("matches template for HeaderSection", () => {

        const section = {
            template: "header",
            data: {
                margins: "mt-10",
                title: "SOCIALS",
                color: "white"
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section}/>);
            const elements = screen.getAllByText(CONTAINS_WORD_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches template for ExperienceSection", () => {

        const section = {
            template: "experiences",
            data: {
                experiences: [
                    {
                        "name": "Company Name Here",
                        "title": "Senior Web Developer",
                        "duration": "Jan 2023 - Present",
                        "location": "Remote",
                        "descriptions": ["Build clean and useful websites" ],
                        "skills": ["HTML"]
                    }
                ]
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches template for SkillSection", () => {

        const section = {
            template: "skills",
            data: {
                skills: [
                    {
                        name: "Photoshop",
                        value: 4
                    }
                ]
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORD_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches template for CertificationSection", () => {

        const section = {
            template: "certifications",
            data: {
                certifications: [
                    {
                        title: "Master Degree in Studies",
                        name: "Name of University",
                        location: "New York, NY",
                        year: "2012"
                    }
                ]
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches template for InterestSection", () => {

        const section = {
            template: "interests",
            data: {
                interests: ["Passion for traveling and exploring."]
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches template for ProjectSection", () => {

        const section = {
            template: "projects",
            data: {
                projects: [
                    {
                        name: "2D ReactJS Game",
                        description: "Simple 2D ReactJS game which can be played on the browser",
                        skills: ["ReactJS"]
                    }
                ]
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("template should match for NameSection", () => {

        const section = {
            template: "name",
            data: {
                name: "John Doe",
                title: "Web and Graphic Designer"
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("template should match for SummarySection", () => {

        const section = {
            template: "summary",
            data: {
                summary: "Create clean and useful web applications"
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("template should match for ContactSection", () => {

        const section = {
            template: "contact",
            data: {
                phone: "(123) 456-8899",
                email: "info@youremail.com",
                location: "New York, New York"
            }
        };

        it("elements should be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("template should match for SocialSection", () => {

        const section = {
            template: "social",
            data: {
                socials: [
                    {
                        name: "Facebook",
                        icon: "fa-brands fa-facebook",
                        url: "https://facebook.com/profile"
                    }
                ]
            }
        };

        it("elements should rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.getAllByText(CONTAINS_WORD_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("does not match template", () => {

        const section = {
            template: "missingTemplate",
        };

        it("no text elements should not be rendered", () => {
            render(<SectionFactory section={section} />);
            const elements = screen.queryAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBe(0);
        });
    });
});
