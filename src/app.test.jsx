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
            const element = await screen.findByText("Summary");
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
});
