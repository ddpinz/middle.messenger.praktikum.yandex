import Block from '../../utils/Block';
import iconTemplate from './icon.tmpl';

type IconProps = {
    type?: string;
}

export default class Icon extends Block<IconProps> {
    public constructor(props: IconProps) {
        super(props);
    }

    public render() {
        return this.compile(iconTemplate, { ...this.props });
    }
}