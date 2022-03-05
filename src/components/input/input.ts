import { compile } from 'pug';
import Block from '../../utils/Block';
import inputTmpl from './input.tmpl';
import { InputProps } from './input.types';

export default class Input extends Block<InputProps> {
    public constructor(props: InputProps) {
        super(
            'div',
            {
                ...props,
                events: {
                    focusout: (e: Event) => this.handleBlur(e)
                }
            },
        );
    }

    public handleBlur(e: Event) {
        console.log((e.target as HTMLInputElement).validationMessage);
        this.setProps({
            error_message: (e.target as HTMLInputElement).validationMessage ? this.props.error_pattern : '',
            input_value: (e.target as HTMLInputElement).value
        });
    }

    public render() {
        return this.compile(compile(inputTmpl), { ...this.props });
    }
}
