import styled from '@emotion/styled';
import Modal from 'react-modal';

export const ModalContainer = styled(Modal)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9000;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: auto;
	padding: 0;
	margin: 0;
	transition: all 0.3s ease-in-out;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const ModalBody = styled.div`
	padding: 1rem;
`;

export const ModalTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 400;
	color: rgb(70, 72, 85);
	margin: 0;
	padding: 0;
	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;
export const ModalText = styled.p`
	font-size: 1.2rem;
	color: #000;
	margin: 0;
	padding: 0;
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
export const ModalButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 0;
	}
`;
export const ModalButton = styled.button`
	background-color: #fff;
	border: 1px solid #000;
	border-radius: 5px;
	padding: 10px;
	margin: 0 10px;
	font-size: 1.2rem;
	font-weight: bold;
	color: #000;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #000;
		color: #fff;
	}
	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const ModalConfirmButton = styled.button`
	border-color: #7b1fa2;
	background-color: #4a148c;
	font-size: 0.9rem;
	font-weight: 400;
	line-height: 1.25;
	display: inline-block;
	padding: 0.75rem 1rem;
	color: #fff;
	border-radius: 0.25rem;
	cursor: pointer;
	margin-left: 0.4rem;
	transition: all 0.3s ease-in-out;
	&:hover {
		border-color: #7b1fa2;
		background-color: #6a1b9a;
	}
	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const ModalCancelButton = styled(ModalConfirmButton)`
	color: #fff;
	border-color: #6b6f82;
	background-color: #6b6f82;
	&:hover {
		color: #fff;
		border-color: #545766;
		background-color: #5a5d6d;
	}
	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const ModalClose = styled.button`
	background-color: transparent;
	padding: 5px;
	font-size: 1.4rem;
	font-weight: 900;
	top: -5px;
	color: #999;
	position: relative;
	cursor: pointer;
	margin-left: 4rem;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: #666;
	}
	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 400px;
	padding: 0;
	margin: 0;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 1px 15px 1px rgb(62 57 107 / 7%);
	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		border-radius: 0;
		box-shadow: none;
	}
`;

export const ModalHeader = styled.div`
	display: flex;
	width: 100%;
	border-top-left-radius: 0.35rem;
	border-top-right-radius: 0.35rem;
	align-items: center;
	justify-content: space-between;
	padding: 0.8rem 1rem;
	border-bottom: 1px solid rgb(152, 164, 184);
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding: 0;
		border-bottom: none;
	}
`;

export const ModalFooter = styled.div`
	display: flex;
	width: 100%;
	border-bottom-left-radius: 0.35rem;
	border-bottom-right-radius: 0.35rem;
	justify-content: flex-end;
	align-items: center;
	padding: 0.8rem 1rem;
	border-top: 1px solid rgb(152, 164, 184);
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding: 0;
		border-top: none;
	}
`;
