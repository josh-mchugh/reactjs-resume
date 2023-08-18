import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';

describe("ExperienceSection Component", () => {

    const experiences = [
        {
            name: "Branded Agency",
            title: "Web Designer",
            duration: "Mar 2020 - Jan 2023",
            location: "Boston, MA",
            descriptions: [
                "Creating corporate logos over multiple iterations",
                "Fixing missized and misused emailed images"
            ],
            skills: [
                "Photoshop",
                "Figma"
            ]
        }
    ];

    it("experiance name should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Branded Agency");
        expect(element).toBeInTheDocument();
    });

    it("experience title should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Web Designer");
        expect(element).toBeInTheDocument();
    });

    it("experience duration should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Mar 2020 - Jan 2023");
        expect(element).toBeInTheDocument();
    });

    it("experience location should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Boston, MA");
        expect(element).toBeInTheDocument();
    });

    it("experience 'creating' description should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Creating corporate logos over multiple iterations");
        expect(element).toBeInTheDocument();
    });

    it("experience 'fixing' description should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Fixing missized and misused emailed images");
        expect(element).toBeInTheDocument();
    });

    it("experience 'photoshop' skill should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Photoshop");
        expect(element).toBeInTheDocument();
    });

    it("experience 'Figma' skill should be in the document", () => {
        render(<ExperienceSection experiences={experiences}/>);
        const element = screen.getByText("Figma");
        expect(element).toBeInTheDocument();
    });
});
