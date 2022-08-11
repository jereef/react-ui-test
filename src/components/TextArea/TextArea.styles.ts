import styled from '@emotion/styled';

export const TextArea = styled.textarea<any>`
	font-size: 1rem;
	line-height: 1.25;
	display: block;
	width: 100%;
	padding: 0.75rem 1rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	border-radius: 0.25rem;
	background-color: #fff;
	color: #3b4781;
	border: 1px solid #cacfe7;
	resize: ${(props): any => props.resize || 'none'};
	&:focus {
		color: #4e5154;
		border-color: #1e9ff2;
		outline: 0;
		background-color: #fff;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	&::placeholder {
		color: #b2b9dc;
	}
`;
