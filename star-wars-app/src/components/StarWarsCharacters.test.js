import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import { getData as mockData } from "../api"
import StarWarsCharacters from '../components/StarWarsCharacters';

jest.mock("../api");

test('StarWarsComponent renders buttons and has data', async () => {

    mockData.mockResolvedValue({
        count: 'mockCount',
        results: [
            {
                name: "mockName",
                id: Date.now()
            }
        ],
        next: "mockNext",
        previous: "mockPrevious"
    });

    const { getByText } = render(<StarWarsCharacters />);
    const nextButton= getByText(/next/i);
    const previousButton = getByText(/previous/i);

    fireEvent.click(nextButton);
    fireEvent.click(previousButton);

    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(mockData).toHaveBeenCalledTimes(1);

    wait(() => expect(getByText(/Characters/i).toBeInDocument()));
});