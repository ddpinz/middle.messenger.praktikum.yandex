import Block from '../../../../utils/Block';
import Modal from '../../../../components/modal/modal';
import PopupButton from '../../../../components/popup-button';
import actionsTmpl from './actions.tmpl';
import AddUser from '../add-user-card/add-user';
import DelUser from "../del-user-card/del-user";
import Avatar from "../change-avatar-card/avatar";

type ActionsProps = {
    addButton?: PopupButton;
    addUserModal?: Modal,
    removeButton?: PopupButton;
    removeUserModal?: Modal;
    avatarButton?: PopupButton;
    avatarChatModal?: Modal;
    trashButton?: PopupButton;
    trashChatModal?: Modal;
    events: {
        click: (e: Event) => void
    }
}

export default class Actions extends Block<ActionsProps> {
    constructor(props: ActionsProps) {
        super({
            addButton: new PopupButton({
                className: 'chat-tooltip__item',
                type: 'icon-add',
                text: 'Добавить пользователя',
                events: {
                    click: (e: PointerEvent) => {
                        e.stopPropagation();
                        const element: Element | null = document.getElementById('add_user_modal');
                        if (element) {
                            element.classList.add('modal_show');
                        }
                    }
                }
            }),
            addUserModal: new Modal({
                id: 'add_user_modal',
                content: new AddUser({ })
            }),
            removeButton: new PopupButton({
                className: 'chat-tooltip__item',
                type: 'icon-remove',
                text: 'Удалить пользователя',
                events: {
                    click: (e: PointerEvent) => {
                        e.stopPropagation();
                        const element: Element | null = document.getElementById('remove_user_modal');
                        if (element) {
                            element.classList.add('modal_show');
                        }
                    }
                }
            }),
            removeUserModal: new Modal({
                id: 'remove_user_modal',
                content: new DelUser({ })
            }),
            avatarButton: new PopupButton({
                className: 'chat-tooltip__item',
                type: 'icon-change-avatar',
                text: 'Изменить аватар',
                events: {
                    click: (e: PointerEvent) => {
                        e.stopPropagation();
                        const element: Element | null = document.getElementById('avatar_chat_modal');
                        if (element) {
                            element.classList.add('modal_show');
                        }
                    }
                }
            }),
            avatarChatModal: new Modal({
                id: 'avatar_chat_modal',
                content: new Avatar({ })
            }),
            trashButton: new PopupButton({
                className: 'chat-tooltip__item-warning',
                type: 'icon-trash',
                text: 'Удалить чат'
            }),
            events: {
                click: (e: PointerEvent) => {
                    e.stopPropagation();
                    const element: Element | null = document.getElementById('dropdown__content');
                    if (element) {
                        element.classList.toggle('chat-tooltip-show');
                    }
                }
            }
        });
    }

    public render(): DocumentFragment {
        return this.compile(actionsTmpl, { ...this.props });
    }
}