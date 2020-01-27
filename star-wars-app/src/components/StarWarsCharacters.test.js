import React from 'react';
import {render} from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';

test('renders StarWarsCharacters', () => {
    render(<StarWarsCharacters />);
})