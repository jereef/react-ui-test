import React from 'react';
import { IModal } from '../../types/types';
import * as S from './Modal.styles';

export const Modal: React.FC<IModal> = ({
	isOpen,
	onClose,
	title,
	children,
	confirmButton,
	cancelButton,
}) => {
	return (
		<S.ModalContainer
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Modal"
			className="modal"
			overlayClassName="modal-overlay"
		>
			<S.ModalContent>
				<S.ModalHeader>
					<S.ModalTitle>{title}</S.ModalTitle>
					<S.ModalClose data-testid="modal-close" onClick={onClose}>
						&times;
					</S.ModalClose>
				</S.ModalHeader>
				<S.ModalBody>{children}</S.ModalBody>
				<S.ModalFooter>
					{cancelButton && (
						<S.ModalCancelButton
							data-testid="modal-button-cancel"
							onClick={cancelButton.onClick}
						>
							{cancelButton.text}
						</S.ModalCancelButton>
					)}
					{confirmButton && (
						<S.ModalConfirmButton
							data-testid="modal-button-confirm"
							onClick={confirmButton.onClick}
						>
							{confirmButton.text}
						</S.ModalConfirmButton>
					)}
				</S.ModalFooter>
			</S.ModalContent>
		</S.ModalContainer>
	);
};
