import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CertificationSection from './CertificationSection';

describe("Certification Section", () => {

    const certifications = [
        {
            title: "Certified Cloud Practitioner",
            year: "2020",
            name: "Web Services"
        },
        {
            title: "Master of Libral Arts",
            year: "2012",
            name: "University"
        }
    ];

    it("certification title should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("Certified Cloud Practitioner");
        expect(element).toBeInTheDocument();
    });

    it("certification year should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("2020");
        expect(element).toBeInTheDocument();
    });

    it("ceritifcation name should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("Web Services");
        expect(element).toBeInTheDocument();
    });

    it("university title should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("Master of Libral Arts");
        expect(element).toBeInTheDocument();
    });

    it("university year should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("2012");
        expect(element).toBeInTheDocument();
    });

    it("university name should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("University");
        expect(element).toBeInTheDocument();
    });
});
