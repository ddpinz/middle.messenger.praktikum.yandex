import chatTemplate from './chat.tmpl';
import Block from '../../utils/Block';
import { ChatProps } from './chat.types';

export default class Chat extends Block<ChatProps> {
    public constructor() {
        super(
            'div',
            {},
        );
    }

    public render() {
        return this.compile(chatTemplate, { ...this.props });
    }
}