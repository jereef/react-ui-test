import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Modal from './Modal';

describe('Modal', () => {
	const handleClose = jest.fn();
	it('renders Modal without crashing', () => {
		render(
			<Modal isOpen={true} title="Test Title Modal" onClose={handleClose}>
				Test Content Modal
			</Modal>,
		);
		expect(screen.getByText('Test Content Modal')).toBeInTheDocument();
	});
	it('close modal when click on close button', async () => {
		render(
			<Modal isOpen={true} title="Test Title Modal" onClose={handleClose}>
				Test Content Modal
			</Modal>,
		);
		const closeButton = screen.getByTestId('modal-close');
		closeButton.click();
		expect(handleClose).toHaveBeenCalledTimes(1);
	});
});
