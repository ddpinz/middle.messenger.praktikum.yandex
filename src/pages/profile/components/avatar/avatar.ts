import Block from '../../../../utils/Block';
import avatarTmpl from './avatar.tmpl';
import { AvatarProps } from './avatar.types';
import UserController from "../../../../controllers/UserController";
import {connect, StoreData} from "../../../../utils/Store";

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
        UserController.updateAvatar(formData);
    }

    public render() {
        return this.compile(avatarTmpl, { ...this.props });
    }
}

function mapStateToProps(state: StoreData) {
    return {
        avatar: state?.currentUser?.avatar
    };
}

export default connect(Avatar, mapStateToProps);
