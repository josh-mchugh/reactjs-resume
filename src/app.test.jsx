import { describe, beforeEach, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './app';
import data from './../demo-data';

global.fetch = vi.fn();
fetch.mockResolvedValue({
    json: () => new Promise((resolve) => resolve(data))
});

describe("App Component", () => {

    describe("Header Section", () => {
        it("person name should be present", async () => {
            render(<App/>);
            const element = await screen.findByText("John Doe");
            expect(element).toBeInTheDocument();
        });
    });
});
