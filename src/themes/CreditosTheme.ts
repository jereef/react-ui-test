import { css } from '@emotion/react';

export const CreditosTheme = {
	global: css`
		@tailwind base;
		@tailwind components;
		@tailwind utilities;

		html,
		body {
			font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, 'Helvetica Neue', Arial, sans-serif;
			font-size: 0.95rem;
			font-weight: 400;
			line-height: 1.45;
			text-align: left;
			padding: 0;
			margin: 0;
			background-color: #f4f5fa;
		}

		label {
			color: #2b335e;
			width: 100%;
			display: inline-block;
			margin: 0.5rem 0;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		* {
			box-sizing: border-box;
		}
	`,
	fonts: {
		primary: 'Montserrat, sans-serif',
	},
	fg: 'palevioletred',
	bg: 'white',
};
