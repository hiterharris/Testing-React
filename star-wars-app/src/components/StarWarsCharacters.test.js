import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import { getData as mockData } from "../api"
import StarWarsCharacters from '../components/StarWarsCharacters';

jest.mock("../api");

test(' buttons re-render new page', async () => {
    mockData.mockResolvedValue({results: [{
        name: "Luke Skywalker",
        height: "172",
        mass: "77", 
        id: Date.now()

    }],
        next: "abcd",
        previous: "abcd"
    })

    const { getByText } = render(<StarWarsCharacters />)

    const nextButton= getByText(/next/i);
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);

    const previousButton = getByText(/previous/i)
    expect(previousButton).toBeInTheDocument();
    fireEvent.click(previousButton);

    expect(mockData).toHaveBeenCalledTimes(1);

    wait(() => expect(getByText(/Luke/i).toBeInDocument()))
})