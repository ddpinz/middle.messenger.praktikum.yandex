import Block from '../../utils/Block';
import buttonTemplate from './button.tmpl';

type ButtonProps = {
    events?: {
        click: (e: Event) => void,
    };
    className?: string;
    type?: string;
    text?: string;
}

export default class Button extends Block<ButtonProps> {
    public constructor(props: ButtonProps) {
        super(props);
    }

    public render() {
        return this.compile(buttonTemplate, { ...this.props });
    }
}