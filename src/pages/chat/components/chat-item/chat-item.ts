import Block from '../../../../utils/Block';
import chatTmpl from './chat-item.tmpl';
import { Props } from '../../../../utils/helpers';

class ChatItem extends Block<Props> {
    public constructor(props: Props) {
        super({
            ...props
        });
    }

    public render() {
        return this.compile(chatTmpl, { ...this.props });
    }
}

export default ChatItem;