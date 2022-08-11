import { Global, ThemeProvider, ThemeProviderProps } from '@emotion/react';
import React from 'react';
import { CreditosTheme as defaultTheme } from '../../themes';

export const LibraryThemeProvider: React.FC<ThemeProviderProps> = ({
	theme = defaultTheme as any,
	children,
}) => {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={theme.global} />
			{children}
		</ThemeProvider>
	);
};
