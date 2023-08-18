
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillList from './SkillList';

describe("SkillList Component", () => {

    const skills = [
        'JavaScript',
        'ReactJS'
    ];

    it("'JavaScript' should be in the document", () => {
        render(<SkillList skills={skills}/>);
        const element = screen.getByText('JavaScript');
        expect(element).toBeInTheDocument();
    });

    it("'ReactJS' should be in the document", () => {
        render(<SkillList skills={skills}/>);
        const element = screen.getByText('ReactJS');
        expect(element).toBeInTheDocument();
    });
});
