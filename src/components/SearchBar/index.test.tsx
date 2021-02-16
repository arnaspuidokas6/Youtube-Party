import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '.';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
    it('should render', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const { container } = render(<SearchBar />);

        expect(screen.getByTestId('search-input')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    it('should validate too long input', () => {
        render(<SearchBar />);
        userEvent.type(screen.getByTestId('search-input'), '123445557889900001111222233344');
        expect(screen.getByText('Invalid search!')).toBeVisible();
    });
});
