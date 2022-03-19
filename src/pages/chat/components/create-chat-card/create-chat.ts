import Block from '../../../../utils/Block';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import addUserTmpl from './create-chat.tmpl';
import ChatController from '../../../../controllers/ChatController';

type AddUserProps = {
    inputId?: Input;
    addButton?: Button;
    cancelButton?: Button;
    events?: {
        submit: (e: Event) => void;
    }
}

class AddUser extends Block<AddUserProps> {
    constructor(props: AddUserProps) {
        super({
            ...props,
            events: {
                submit: (e: Event) => this.handlerSubmit(e)
            },
            inputId: new Input({
                type: 'text',
                title: 'Название',
                name: 'title'
            }),
            addButton: new Button({
                type: 'submit',
                text: 'Добавить',
                className: 'btn-primary btn-small'
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
        ChatController.create({ title: formData.get('title') });
        const element: Element | null = document.getElementById('add_chat_modal');
        if (element) {
            element.classList.remove('modal_show');
        }
    }

    public hide(e: Event) {
        const element: Element | null = document.getElementById('add_chat_modal');
        if (element) {
            element.classList.remove('modal_show');
        }
    }

    render() {
        return this.compile(addUserTmpl, { ...this.props });
    }
}

export default AddUser;