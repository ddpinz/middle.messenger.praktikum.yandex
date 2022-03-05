import { compile } from 'pug';
import Block from '../../../../utils/Block';
import profileLineTmpl from './profile-line.tmpl';
import { ProfileLineProps } from './profile-line.types';

export default class Input extends Block<ProfileLineProps> {
    public constructor(props: ProfileLineProps) {
        super(
            'div',
            {
                ...props
            },
        );
    }

    public render() {
        return this.compile(compile(profileLineTmpl), { ...this.props });
    }
}
