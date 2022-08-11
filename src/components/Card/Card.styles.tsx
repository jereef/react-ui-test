import styled from '@emotion/styled';

interface ICardContainer {
	backgroundColor?: string;
	fontColor?: string;
	titleSize?: 'small' | 'large';
}

export const CardContainer = styled.div<ICardContainer>`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	border-radius: 0.35rem;
	background-color: ${(props) => props.backgroundColor || '#fff'};
	color: ${(props) => props.fontColor || '#333'};
	background-clip: border-box;
	margin-bottom: 1.875rem;
	border: none;
	-webkit-box-shadow: 0 1px 15px 1px rgb(62 57 107 / 7%);
	box-shadow: 0 1px 15px 1px rgb(62 57 107 / 7%);
	padding: 1.3rem;
	h3 {
		font-size: ${(props) =>
			props.titleSize === 'small' ? '1.3rem' : '1.7rem'};
		margin-bottom: ${(props) =>
			props.titleSize === 'small' ? '0.8rem' : 'auto'};
	}
	ul li {
		margin-bottom: 1rem;
	}
`;
export const CardHeader = styled.div`
	margin-bottom: 0.5rem;
`;
export const CardBody = styled.div`
	position: relative;
`;

export const CardDropdown = styled.ul`
	position: absolute;
	transform: translate3d(0px, 40px, 0px);
	top: 19px;
	right: 37px;
	min-width: 140px;
	background-color: #fff;
	border-radius: 0.35rem;
	padding: 0;
	box-shadow: 0 1px 15px 1px rgb(62 57 107 / 7%);
	z-index: 1;
	overflow: hidden;
`;
export const CardDropdownItem = styled.li`
	button {
		text-align: left;
		padding: 0.8rem 1.5rem;
		color: #3b4781;
		text-decoration: none;
		transition: all 0.5s;
		width: 100%;
		&:hover {
			color: #6a1b9a;
			background-color: #f5f5f5;
		}
	}
	list-style: none;
	margin: 0 !important;
`;

export const CardDropdownButton = styled.button`
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.25;
	display: inline-block;
	padding: 0.75rem 1rem;
	color: #fff;
	border-color: #7b1fa2;
	background-color: #9c27b0;
	border-radius: 2rem;
	position: absolute;
	top: 5%;
	right: 5%;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: #fff;
		border-color: #8e24aa;
		background-color: #ab47bc;
	}
	&:focus {
		outline: 0;
		box-shadow: none;
	}
	&:active {
		color: #fff;
		border-color: #7b1fa2;
		background-color: #6a1b9a;
	}
	&:after {
		display: inline-block;
		font-weight: 900;
		position: relative;
		right: 0;
		top: 0;
		font-size: 0.8rem;
		content: '\f107';
		font-family: 'Line Awesome Free';
		margin-left: 0.5rem;
		color: #fff;
	}
`;
