import Block from '../../../../utils/Block';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import addUserTmpl from './del-user.tmpl';
import ChatController from '../../../../controllers/ChatController';
import store from '../../../../utils/Store';

type DelUserProps = {
    inputId?: Input;
    delButton?: Button;
    cancelButton?: Button;
    events?: {
        submit: (e: Event) => void;
    }
}

class DelUser extends Block<DelUserProps> {
    constructor(props: DelUserProps) {
        super({
            ...props,
            events: {
                submit: (e: Event) => this.handlerSubmit(e)
            },
            inputId: new Input({
                type: 'text',
                title: 'Пользователь',
                name: 'user'
            }),
            delButton: new Button({
                type: 'submit',
                text: 'Удалить',
                className: 'btn-warning btn-small'
            }),
            cancelButton: new Button({
                type: 'button',
                text: 'Отмена',
                className: 'btn-secondary btn-small',
                events: {
                    click: (e: Event) => this.hide(e)
                }
            })
        });
    }

    public handlerSubmit(e: Event) {
        e.stopPropagation();
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const { currentChat = {} } = store.getState();
        const { id: chatId } = currentChat;
        const userId = Number(formData.get('user'));
        ChatController.deleteUser(chatId, userId);
        const element: Element | null = document.getElementById('remove_user_modal');
        if (element) {
            element.classList.remove('modal_show');
        }
    }

    public hide(e: Event) {
        const element: Element | null = document.getElementById('remove_user_modal');
        if (element) {
            element.classList.remove('modal_show');
        }
    }

    render() {
        return this.compile(addUserTmpl, { ...this.props });
    }
}

export default DelUser;