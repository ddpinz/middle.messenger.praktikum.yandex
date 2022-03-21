import Block from '../../utils/Block';
import popupButtonTmpl from './popup-button.tmpl';
import { Icon } from '../icon';

type PopupButtonProps = {
    events?: {
        click: (e: Event) => void,
    };
    icon?: Icon;
    text?: string;
    type?: string;
    className?: string
}

export default class PopupButton extends Block<PopupButtonProps> {
    public constructor(props: PopupButtonProps) {
        super({
            ...props,
            icon: new Icon({
                type: props.type
            })
        });
    }

    public render() {
        return this.compile(popupButtonTmpl, { ...this.props });
    }
}