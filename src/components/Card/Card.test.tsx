import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('Card', () => {
	it('renders Card without crashing', () => {
		render(<Card>Test</Card>);
		const card = screen.getByText('Test');
		expect(card).toBeInTheDocument();
	});
	it('render Card with title', () => {
		render(<Card title="Test Title">Test</Card>);
		const card = screen.getByText('Test Title');
		expect(card).toBeInTheDocument();
	});
});
