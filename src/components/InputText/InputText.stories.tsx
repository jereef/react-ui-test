import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText from './InputText';

export default {
	title: 'Components/InputText',
	component: InputText,
	args: {
		label: 'Text',
		placeholder: 'Enter text',
		value: '',
	},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
	<InputText {...args} />
);

export const Story = Template.bind({});
Story.args = {};
