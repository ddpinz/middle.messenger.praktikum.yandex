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
                    focusout: (e: Event) => this.handleFocusOut(e)
                }
            },
        );
    }

    public compare(value: string, referenceValue?: string) {
        if (value !== referenceValue) {
            this.setProps({
                errorMessage: this.props.errorPattern
            });
        }
    }

    public handleFocusOut(e: Event) {
        this.setProps({
            errorMessage: (e.target as HTMLInputElement).validationMessage ? this.props.errorPattern : '',
            inputValue: (e.target as HTMLInputElement).value
        });
    }

    public render() {
        return this.compile(inputTmpl, { ...this.props });
    }
}
