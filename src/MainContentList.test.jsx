import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainContentList from './MainContentList';

describe("MainContentList Component", () => {

    const CONTAINS_WORD_REGEX = /\w/;
    const CONTAINS_WORDS_REGEX = /\w+\s+(\w+)/;

    describe("matches templateId for HeaderSection", () => {

        const content = [
            {
                templateId: "headerTemplate",
                data: {
                    margins: "mt-10",
                    title: "SOCIALS",
                    color: "white"
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORD_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches templateId for ExperienceSection", () => {

        const content = [
            {
                templateId: "experienceTemplate",
                data: {
                    experiences: [
                        {
                            "name": "Company Name Here",
                            "title": "Senior Web Developer",
                            "duration": "Jan 2023 - Present",
                            "location": "Remote",
                            "descriptions": ["Build clean and useful websites" ],
                            "technologies": ["HTML"]
                        }
                    ]
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches templateId for SkillSection", () => {

        const content = [
            {
                templateId: "skillsTemplate",
                data:{
                    skills: [
                        {
                            name: "Graphic Design",
                            showGauge: true,
                            items: [
                                {
                                    "name": "Photoshop",
                                    "value": 4
                                }
                            ]
                        }
                    ]
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches templateId for CertificationSection", () => {

        const content = [
            {
                templateId: "educationTemplate",
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
            }
        ];

        it("elements should be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches templateId for InterestSection", () => {

        const content = [
            {
                templateId: "interestsTemplate",
                data: {
                    interests: ["Passion for traveling and exploring."]
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("matches templateId for ProjectSection", () => {

        const content = [
            {
                templateId: "projectsTemplate",
                data: {
                    projects: [
                        {
                            name: "2D ReactJS Game",
                            "description": "Simple 2D ReactJS game which can be played on the browser",
                            "technologies": ["ReactJS"]
                        }
                    ]
                }
            }
        ];

        it("elements should be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.getAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe("does not match templateId", () => {

        const content = [
            {
                templateId: "missingTemplateId",
                data: {}
            }
        ];

        it("no text elements should not be rendered", () => {
            render(<MainContentList content={content}/>);
            const elements = screen.queryAllByText(CONTAINS_WORDS_REGEX);
            expect(elements.length).toBe(0);
        });
    });
});
