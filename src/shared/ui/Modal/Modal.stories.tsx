import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpened: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus aut quis eaque nulla quae vero ab officia nobis architecto alias, nisi, magni ad. Beatae rerum vel fugiat culpa sed!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpened: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus aut quis eaque nulla quae vero ab officia nobis architecto alias, nisi, magni ad. Beatae rerum vel fugiat culpa sed!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
