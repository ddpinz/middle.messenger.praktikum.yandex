import chatTemplate from './chat.tmpl';
import Block from '../../utils/Block';
import { ChatProps } from './chat.types';
import Actions from './components/popup-actions';
import ChatController from '../../controllers/ChatController';
import CreateChat from './components/popup-create';
import ChatItems from './components/chat-items';
import ChatMessages from './components/chat-messages';
import store, { connect } from '../../utils/Store';
import { Props } from '../../utils/helpers';
import SendMessage from "./components/send-message/send-message";
import {Link} from "../../components/link";

class Chat extends Block<ChatProps> {
    public constructor(props) {
        super(
            {
                ...props,
                actionsPopup: new Actions({}),
                createChat: new CreateChat({}),
                chats: new ChatItems({}),
                messages: new ChatMessages({}),
                sendMessage: new SendMessage({}),
                link2Profile: new Link({
                    path: '/settings',
                    text: 'Профиль',
                    className: 'chat-list__head__profile'
                })
            },
        );
    }

    componentDidMount() {
        ChatController.read({ limit: 1000 });
    }

    public render() {
        return this.compile(chatTemplate, { ...this.props });
    }
}

function mapStateToProps(state: Props) {
    return {
        currentChat: state.currentChat || {}
    };
}

export default connect(Chat, mapStateToProps);