import Block from '../../../../utils/Block';
import avatarTmpl from './avatar.tmpl';
import { AvatarProps } from './avatar.types';
import UserController from '../../../../controllers/UserController';
import { connect, StoreData } from '../../../../utils/Store';
import { Props } from '../../../../utils/helpers';

export class Avatar extends Block<AvatarProps> {
    public constructor(props: Props) {
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

        // @ts-ignore
        formData.append('avatar', (e.target as HTMLInputElement)?.files[0]);
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
