import Block from '../../../../utils/Block';
import profileLineTmpl from './profile-line.tmpl';
import { ProfileLineProps } from './profile-line.types';

export default class Input extends Block<ProfileLineProps> {
    public constructor(props: ProfileLineProps) {
        super(
            {
                ...props
            },
        );
    }

    public render() {
        return this.compile(profileLineTmpl, { ...this.props });
    }
}
