import { compile } from 'pug';
import Block from '../../utils/Block';
import buttonTemplate from './button.tmpl';

type ButtonProps = {
    events?: {
        click: () => void,
    };
    className?: string;
    type?: string;
    text?: string;
}

export default class Button extends Block<ButtonProps> {
    public constructor(props: ButtonProps) {
        super('div', props);
    }

    public render() {
        return this.compile(compile(buttonTemplate), { ...this.props });
    }
}