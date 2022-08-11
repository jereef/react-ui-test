import styled from '@emotion/styled';

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	border: 1px solid #e3ebf3;
	th {
		border: 1px solid #e3ebf3;
		padding: 10px;
		text-align: center;
		font-size: 14px;
		font-weight: 800;
		color: #333;
		border-bottom: 2px solid #e3ebf3;
	}
	td {
		border: 1px solid #e3ebf3;
		padding: 10px;
		text-align: center;
		font-size: 14px;
		font-weight: normal;
		color: #333;
		&:hover {
		}
	}
	button {
		border-color: #7b1fa2;
		background-color: #4a148c;
		color: #fff;
		border-radius: 0.2rem;
		padding: 0.45rem 0.75rem;
		font-size: 0.9rem;
		font-weight: normal;
		transition: 300ms ease all;
		width: 100%;
		&:hover {
			background-color: #7b1fa2;
			color: #fff;
		}
	}
`;
