import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputDate from './InputDate';

export default {
	title: 'Components/InputDate',
	component: InputDate,
	args: {
		label: 'Date',
		placeholder: 'Select a date',
		value: '',
	},
} as ComponentMeta<typeof InputDate>;

const Template: ComponentStory<typeof InputDate> = (args) => (
	<InputDate {...args} />
);

export const Story = Template.bind({});
Story.args = {};
