import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar } from './SearchBar';

test('renders SearchBar and allows input', () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = getByPlaceholderText('Buscar...');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputElement.value).toBe('test');
});