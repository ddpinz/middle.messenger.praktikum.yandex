import Block from '../../../../utils/Block';
import chatTmpl from './chat-messages.tmpl';
import { connect } from '../../../../utils/Store';
import { Props } from '../../../../utils/helpers';

class ChatMessages extends Block<Props> {
    public constructor(props: Props) {
        super({
            ...props,
            messagesItems: ['']
        });
    }

    public render() {
        return this.compile(chatTmpl, { ...this.props });
    }
}

function mapStateToProps(state: Props) {
    return {
        chats: state.сhats || [],
        messagesItems: state.messagesItems || []
    };
}

export default connect(ChatMessages, mapStateToProps);