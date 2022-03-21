import Block from '../../../../utils/Block';
import profileLinkTmpl from './profile-link.tmpl';
import { ProfileLinkProps } from './profile-link.types';

export default class Input extends Block<ProfileLinkProps> {
    public constructor(props: ProfileLinkProps) {
        super(
            {
                ...props
            },
        );
    }

    public render() {
        return this.compile(profileLinkTmpl, { ...this.props });
    }
}
