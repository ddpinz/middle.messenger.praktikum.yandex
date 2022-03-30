import Block from '../../../../utils/Block';
import Modal from '../../../../components/modal/modal';
import createTmpl from './create.tmpl';
import CreateChat from '../create-chat-card/create-chat';

type ActionsProps = {
    addChatModal?: Modal,
    events: {
        click: (e: Event) => void
    }
}

export default class Create extends Block<ActionsProps> {
    constructor() {
        super({
            addChatModal: new Modal({
                id: 'add_chat_modal',
                content: new CreateChat({ })
            }),
            events: {
                click: (e: PointerEvent) => {
                    e.stopPropagation();
                    const element: Element | null = document.getElementById('add_chat_modal');
                    if (element) {
                        element.classList.add('modal_show');
                    }
                }
            }
        });
    }

    public render(): DocumentFragment {
        return this.compile(createTmpl, { ...this.props });
    }
}