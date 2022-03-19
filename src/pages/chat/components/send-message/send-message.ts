import Block from '../../../../utils/Block';
import ChatController from '../../../../controllers/ChatController';
import { Props } from '../../../../utils/helpers';
import sendMessageTmpl from './send-message.tmpl';

class SendMessage extends Block<Props> {
    constructor(props: Props) {
        super({
            ...props,
            events: {
                submit: (e: Event) => this.handlerSubmit(e)
            }
        });
    }

    public handlerSubmit(e: Event) {
        e.stopPropagation();
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const message = formData.get('message');
        ChatController.sendMessage(message);
    }

    render() {
        return this.compile(sendMessageTmpl, { ...this.props });
    }
}

export default SendMessage;