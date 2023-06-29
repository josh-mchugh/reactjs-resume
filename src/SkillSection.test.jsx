import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillSection from './SkillSection';

describe("SkillSection Component", () => {

    describe("show gauge is enabled", () => {

        const skills = [
            {
                name: "Frontend Development",
                showGauge: true,
                items: [
                    {
                        name: "JavaScript",
                        value: 3
                    }
                ]
            }
        ];

        it("skill group name to be in the document", () => {
            render(<SkillSection skills={skills}/>);
            const element = screen.getByText("Frontend Development");
            expect(element).toBeInTheDocument();
        });

        it("skill 'JavaScript' to be present in the document", () => {
            render(<SkillSection skills={skills}/>);
            const element = screen.getByText("JavaScript");
            expect(element).toBeInTheDocument();
        });

        it("skill gauge to be present in the document", () => {
            const { container } = render(<SkillSection skills={skills}/>);
            const elements = container.querySelectorAll(".w-2.h-2");
            expect(elements.length).toEqual(5);
        });

        it("skill gauge has 3 with accent color in the document", () => {
            const { container } = render(<SkillSection skills={skills}/>);
            const elements = container.querySelectorAll(".w-2.h-2.bg-accent");
            expect(elements.length).toBe(3);
        });
    });

    describe("show gauge is disabled", () => {

        const skills = [
            {
                name: "Backend Development",
                showGauge: false,
                items: [
                    {
                        name: "Java"
                    }
                ]
            }
        ];

        it("skill gorup name is in the document", () => {
            render(<SkillSection skills={skills}/>);
            const elements = screen.getByText("Backend Development");
            expect(elements).toBeInTheDocument();
        });

        it("skill 'Java' is present in the document", () => {
            render(<SkillSection skills={skills}/>);
            const elements = screen.getByText("Java");
            expect(elements).toBeInTheDocument();
        });

        it("skill guages are not present in the document", () => {
            const { container } = render(<SkillSection skills={skills}/>);
            const elements = container.querySelectorAll('.w-2.h-2');
            expect(elements.length).toBe(0);
        });
    });
});
