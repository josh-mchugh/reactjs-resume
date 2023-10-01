import { describe, beforeEach, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {

    describe("Header section should be present", () => {

        it("person name should be present", () => {
            render(<App/>);
            const element = screen.getByText("John Doe");
            expect(element).toBeInTheDocument();
        });

        it("personal title should be present", () => {
            render(<App/>);
            const element = screen.getByText("Web and Graphic Designer");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Summary section should be present", () => {

        it("section title should be present", () => {
            render(<App/>);
            const element = screen.getByText("SUMMARY");
            expect(element).toBeInTheDocument();
        });

        it("summary statement should be present", () => {
            render(<App/>);
            const summary = "Rock Star/Ninja can you ballpark the cost per unit for me, for touch base disband the squad but rehydrate as needed sacred cow.";
            const element = screen.getByText(summary);
            expect(element).toBeInTheDocument();
        });
    });

    describe("Contact section be present", () => {

        it("section title should be present", () => {
            render(<App/>);
            const element = screen.getByText("CONTACT");
            expect(element).toBeInTheDocument();
        });
        
        it("phone number should be present", () => {
            render(<App/>);
            const element = screen.getByText("(123) 456-8899");
            expect(element).toBeInTheDocument();
        });

        it("email should be present", () => {
            render(<App/>);
            const element = screen.getByText("info@youremail.com");
            expect(element).toBeInTheDocument();
        });

        it("location should be present", () => {
            render(<App/>);
            const element = screen.getByText("New York, New York");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Social section be present", () => {

        it("section title should be present", () => {
            render(<App/>);
            const element = screen.getByText("SOCIAL");
            expect(element).toBeInTheDocument();
        });
        
        it("facebook label should be present", () => {
            render(<App/>);
            const element = screen.getByText("Facebook");
            expect(element).toBeInTheDocument();
        });

        it("facebook url should be present", () => {
            render(<App/>);
            const element = screen.getByText("https://facebook.com/profile");
            expect(element).toBeInTheDocument();
        });

        it("twitter label should be present", () => {
            render(<App/>);
            const element = screen.getByText("Twitter");
            expect(element).toBeInTheDocument();
        });

        it("twitter url should be present", () => {
            render(<App/>);
            const element = screen.getByText("https://twitter.com/profile");
            expect(element).toBeInTheDocument();
        });

        it("LinkedIn label should be present", () => {
            render(<App/>);
            const element = screen.getByText("LinkedIn");
            expect(element).toBeInTheDocument();
        });

        it("LinkedIn url should be present", () => {
            render(<App/>);
            const element = screen.getByText("https://linkedin.com/profile");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Work Experience section should be present", ()  => {

        it("section title should be present", () => {
            render(<App/>);
            const element = screen.getByText("WORK EXPERIENCE");
            expect(element).toBeInTheDocument();
        });

        it("job titles should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("Senior Web Developer");
            expect(elements.length).toBe(3);
        });

        it("company names should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("Company Name Here");
            expect(elements.length).toBe(3);
        });

        it("job location should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("Remote");
            expect(elements.length).toBe(3);
        });

        it("skill references for 'Photoshop' should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("Photoshop");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'HTML' should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("HTML");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'CSS' should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("CSS");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'Illustrator' should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("Illustrator");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'PHP' should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("PHP");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'JavaScript' should be present", () => {
            render(<App/>);
            const elements = screen.getAllByText("HTML");
            expect(elements.length).toBe(4);
        });

        describe("latest job experience should be present", () => {

            it("experience time time range should be present", () => {
                render(<App/>);
                const element = screen.getByText("Jan 2023 - Present");
                expect(element).toBeInTheDocument();
            });

            it("should contain work experience description", () => {
                render(<App/>);
                const expected = "Efficiently unleash cross-media information without cross-media value.";
                const element = screen.getByText(expected);
                expect(element).toBeInTheDocument();
            });
        });
    });

    describe("Profession Skills section", () => {

        it("section title should be present", () => {
            render(<App/>);
            const element = screen.getByText("PROFESSIONAL SKILLS");
            expect(element).toBeInTheDocument(); 
        });

        it("skill refrence 'WordPress' should be present", () => {
            render(<App/>);
            const element = screen.getByText("WordPress");
            expect(element).toBeInTheDocument();
        });

        it("skill reference 'Joomla' should be present", () => {
            render(<App/>);
            const element = screen.getByText("Joomla");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Education Section", () => {

        it("section title should be present", () => {
            render(<App/>);
            const element = screen.getByText("EDUCATION");
            expect(element).toBeInTheDocument();
        });

        it("certificate title should be present", () => {
            render(<App/>);
            const element = screen.getByText("Master Degree in Studies");
            expect(element).toBeInTheDocument();
        });

        it("certification institute should be present", () => {
            render(<App/>);
            const element = screen.getByText("Name of University");
            expect(element).toBeInTheDocument();
        });

        it("certification aqcuisition time should be present", () => {
            render(<App/>);
            const element = screen.getByText("2012");
            expect(element).toBeInTheDocument();
        });

    });
});
