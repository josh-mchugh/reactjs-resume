import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CertificationSection from './CertificationSection';

describe("Certification Section", () => {

    const certifications = [
        {
            title: "Certified Cloud Practitioner",
            organization: "Web Services",
            year: "2020",
            location: "Online"
        },
        {
            title: "Master of Libral Arts",
            organization: "University",
            year: "2012",
            location: "New York, New York"
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

    it("certification name should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("Online");
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

    it("university location should be in the document", () => {
        render(<CertificationSection certifications={certifications}/>);
        const element = screen.getByText("New York, New York");
        expect(element).toBeInTheDocument();
    });
});
