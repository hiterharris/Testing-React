import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import App from '../App';

test('App renders with StarWarsCharacters', async () => {
    const {getByText} = render(<App />);

    const characters = getByText(/Characters/i);
    expect(characters).toBeInTheDocument();

    wait(() => expect(getByText(/TestCharacter/i)))
})

test('buttons update data', () => {
    const {getByText} = render(<App />);

    const previousButton = getByText(/Previous/i);
    expect(previousButton).toBeInTheDocument();
    fireEvent.click(previousButton);

    const nextButton = getByText(/Next/i);
    expect(previousButton).toBeInTheDocument();
    fireEvent.click(nextButton);

    wait(() => expect(getByText(/TestCharacter/i)))
})