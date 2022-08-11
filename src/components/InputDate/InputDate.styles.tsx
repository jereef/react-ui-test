import styled from '@emotion/styled';

export const InputDate = styled.input`
	color: #3b4781;
	border: 1px solid #cacfe7;
	border-radius: 0.35rem;
	padding: 0.5rem;
	width: 100%;
	font-size: 1rem;
	color: #333;
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
	&:disabled,
	&:read-only {
		background-color: #eceff1;
	}
`;
