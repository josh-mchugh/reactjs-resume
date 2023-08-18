import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillSection from './SkillSection';

describe("SkillSection Component", () => {

    describe("show gauge is enabled", () => {

        const skills = [
            {
                name: "JavaScript",
                value: 3
            }
        ];

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
});
