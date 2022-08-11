import { ThemeProvider } from '@emotion/react';
import { withThemes } from '@react-theming/storybook-addon/dist/preview';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import '../src/global.css';
import { CreditosTheme } from '../src/themes';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['Overview', 'Components'],
		},
	},
};

export const decorators = [withThemes(ThemeProvider, [CreditosTheme])];
