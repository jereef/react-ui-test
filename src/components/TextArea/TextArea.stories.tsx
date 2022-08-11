import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from './TextArea';

export default {
	title: 'Components/TextArea',
	component: TextArea,
	args: {
		label: 'Text',
		placeholder: 'Enter text',
		value: '',
	},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
	<TextArea {...args} />
);

export const Story = Template.bind({});
Story.args = {};
