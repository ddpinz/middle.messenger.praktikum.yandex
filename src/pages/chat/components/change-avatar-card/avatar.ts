import Block from '../../../../utils/Block';
import avatarTmpl from './avatar.tmpl';
import { AvatarProps } from './avatar.types';
import store, { connect } from '../../../../utils/Store';
import ChatController from '../../../../controllers/ChatController';
import { Props } from '../../../../utils/helpers';

class Avatar extends Block<AvatarProps> {
    public constructor(props) {
        super(
            {
                ...props,
                events: {
                    change: (e: Event) => this.handleChange(e)
                }
            },
        );
    }

    public handleChange(e: Event) {
        const formData = new FormData();

        formData.append('avatar', (e.target as HTMLInputElement)!.files[0]);
        const { currentChat = {} } = store.getState();
        const { id: chatId } = currentChat;
        ChatController.updateAvatar(chatId, formData);
    }

    public render() {
        return this.compile(avatarTmpl, { ...this.props });
    }
}

function mapStateToProps(state: Props) {
    return {
        avatar: state?.currentChat?.avatar
    };
}

export default connect(Avatar, mapStateToProps);
