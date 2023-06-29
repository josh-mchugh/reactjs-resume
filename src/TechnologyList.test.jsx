
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TechnologyList from './TechnologyList';

describe("TechnologyList Component", () => {

    const technologies = [
        'JavaScript',
        'ReactJS'
    ];

    it("'JavaScript' should be in the document", () => {
        render(<TechnologyList technologies={technologies}/>);
        const element = screen.getByText('JavaScript');
        expect(element).toBeInTheDocument();
    });

    it("'ReactJS' should be in the document", () => {
        render(<TechnologyList technologies={technologies}/>);
        const element = screen.getByText('ReactJS');
        expect(element).toBeInTheDocument();
    });
});
