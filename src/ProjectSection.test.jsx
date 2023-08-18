import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectSection from './ProjectSection';

describe("ProjectSection Component", () => {

    const projects = [
        {
            name: "Mars Discovery App",
            description: "A mobile application for astronauts to take pictures of Mars while still wearing their space suit.",
            skills: [
                "JavaScript"
            ]
        }
    ];

    it("name of project should be in the document", () => {
        render(<ProjectSection projects={projects}/>);
        const element = screen.getByText("Mars Discovery App");
        expect(element).toBeInTheDocument();
    });

    it("description of project should be in the document", () => {
        render(<ProjectSection projects={projects}/>);
        const element = screen.getByText("A mobile application for astronauts to take pictures of Mars while still wearing their space suit.");
        expect(element).toBeInTheDocument();
    });

    it("skills of the project should be in the document", () => {
        render(<ProjectSection projects={projects}/>);
        const element = screen.getByText("JavaScript");
        expect(element).toBeInTheDocument();
    });
});
