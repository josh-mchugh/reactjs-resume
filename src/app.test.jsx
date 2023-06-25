import { describe, beforeEach, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './app';
import data from './../demo-data';

global.fetch = vi.fn();
fetch.mockResolvedValue({
    json: () => new Promise((resolve) => resolve(data))
});

describe("App Component", () => {

    describe("Header section should be present", () => {

        it("person name should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("John Doe");
            expect(element).toBeInTheDocument();
        });

        it("personal title should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("Web and Graphic Designer");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Summary section should be present", () => {

        it("section title should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("SUMMARY");
            expect(element).toBeInTheDocument();
        });

        it("summary statement should be present", async () => {
            render(<App/>);
            const summary = "Rock Star/Ninja can you ballpark the cost per unit for me, for touch base disband the squad but rehydrate as needed sacred cow.";
            const element = await screen.findByText(summary);
            expect(element).toBeInTheDocument();
        });
    });

    describe("Contact section be present", () => {

        it("section title should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("CONTACT");
            expect(element).toBeInTheDocument();
        });
        
        it("phone number should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("(123) 456-8899");
            expect(element).toBeInTheDocument();
        });

        it("email should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("info@youremail.com");
            expect(element).toBeInTheDocument();
        });

        it("location should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("New York, New York");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Social section be present", () => {

        it("section title should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("SOCIAL");
            expect(element).toBeInTheDocument();
        });
        
        it("facebook label should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("Facebook:");
            expect(element).toBeInTheDocument();
        });

        it("facebook url should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("https://facebook.com/profile");
            expect(element).toBeInTheDocument();
        });

        it("twitter label should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("Twitter:");
            expect(element).toBeInTheDocument();
        });

        it("twitter url should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("https://twitter.com/profile");
            expect(element).toBeInTheDocument();
        });

        it("LinkedIn label should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("LinkedIn:");
            expect(element).toBeInTheDocument();
        });

        it("LinkedIn url should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("https://linkedin.com/profile");
            expect(element).toBeInTheDocument();
        });
    });

    describe("Work Experience section should be present", ()  => {

        it("section title should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("WORK EXPERIENCE");
            expect(element).toBeInTheDocument();
        });

        it("job titles should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("Senior Web Developer");
            expect(elements.length).toBe(3);
        });

        it("company names should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("Company Name Here");
            expect(elements.length).toBe(3);
        });

        it("job location should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("Remote");
            expect(elements.length).toBe(3);
        });

        it("skill references for 'Photoshop' should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("Photoshop");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'HTML' should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("HTML");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'CSS' should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("CSS");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'Illustrator' should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("Illustrator");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'PHP' should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("PHP");
            expect(elements.length).toBe(4);
        });

        it("skill references for 'JavaScript' should be present", async () => {
            render(<App/>);
            const elements = await screen.findAllByText("HTML");
            expect(elements.length).toBe(4);
        });

        describe("latest job experience should be present", () => {

            it("experience time time range should be present", async () => {
                render(<App/>);
                const element = await screen.findByText("Jan 2023 - Present");
                expect(element).toBeInTheDocument();
            });

            it("should contain work experience description", async () => {
                render(<App/>);
                const expected = "Efficiently unleash cross-media information without cross-media value.";
                const element = await screen.findByText(expected);
                expect(element).toBeInTheDocument();
            });
        });
    });

    describe("Profession Skills section", () => {

        it("section title should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("PROFESSIONAL SKILLS");
            expect(element).toBeInTheDocument(); 
        });

        it("skill refrence 'WordPress' should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("WordPress");
            expect(element).toBeInTheDocument();
        });

        it("skill reference 'Joomla' should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("Joomla");
            expect(element).toBeInTheDocument();
        });
    });
});
