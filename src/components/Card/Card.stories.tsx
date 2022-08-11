import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Card from './Card';

export default {
	title: 'Components/Card',
	component: Card,
	args: {
		title: 'Card',
		isCredit: false,
		backgroundColor: '',
		fontColor: '#000',
		titleSize: 'small',
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
	<Card {...args}> Card Content</Card>
);

const TemplateExampleOfTwoCards: ComponentStory<typeof Card> = (args) => (
	<>
		<div className="grid grid-cols-2 gap-5">
			<Card {...args}> Card Content</Card>
			<Card {...args}> Card Content</Card>
		</div>
	</>
);

export const Story = Template.bind({});
Story.args = {};

export const StoryWithDropdown = Template.bind({});
StoryWithDropdown.args = {
	dropdown: [
		{ text: 'Edit', onClick: () => console.log('Edit') },
		{ text: 'Delete', onClick: () => console.log('Delete') },
	],
};

export const StoryWithTwoCards = TemplateExampleOfTwoCards.bind({});
StoryWithTwoCards.args = {};
