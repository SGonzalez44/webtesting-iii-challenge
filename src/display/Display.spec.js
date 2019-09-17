import React from 'react';
import { react } from '@testing-library/react';

import Display from '../display/Display';
import { render } from 'react-testing-library';

test('Display is to render without crashing', () => {
    render(<Display />)
});

test('Display shows locked if we switch over to locked', () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/locked/i)
})

test('Display it to render without crashing', () => {
    const { getByText } = render(<Display locked={false} />);
    getByText(/locked/i)
})
