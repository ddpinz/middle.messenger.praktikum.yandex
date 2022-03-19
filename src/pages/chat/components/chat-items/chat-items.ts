import Block from '../../../../utils/Block';
import chatTmpl from './chat-items.tmpl';
import ChatItem from '../chat-item';
import ChatController from '../../../../controllers/ChatController';
import store, { connect } from '../../../../utils/Store';
import { isEqualObject, Props } from '../../../../utils/helpers';

type ChatProps = {
    chatItems?: Array<any>,
    chats?: Array<any>,
    events?: {
        click: (e: Event) => void
    }
}

class ChatItems extends Block<ChatProps> {
    public constructor(props) {
        super({
            ...props,
            chatItems: [''],
            events: {
                click: (e: PointerEvent) => {
                    const chatButtons = document.getElementsByClassName('chat-list__content__item');
                    const target: Element | null = e.target as Element;
                    for (let i = 0; i < chatButtons.length; i += 1) {
                        chatButtons[i].classList.remove('chat__active');
                    }
                    if (target) {
                        const button = target.closest('.chat-list__content__item');
                        if (button) {
                            button.classList.add('chat__active');

                            ChatController.setCurrentChat(
                                JSON.parse(button.dataset.chatData)
                            );
                        } else {
                            ChatController.setCurrentChat(null);
                        }
                    }
                }
            }
        });
    }

    public render() {
        return this.compile(chatTmpl, { ...this.props });
    }
}

function mapStateToProps(state: Props) {
    return {
        chats: state.сhats || [],
        chatItems: state.chatItems || []
    };
}

export default connect(ChatItems, mapStateToProps);