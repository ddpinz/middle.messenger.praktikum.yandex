import Block from '../../utils/Block';
import linkTemplate from './link.tmpl';
import router from '../../utils/Router';

type LinkProps = {
    events?: {
        click: (path: string) => void,
    };
    className?: string;
    text?: string;
    path?: string;
}

export default class Link extends Block<LinkProps> {
    public constructor(props: LinkProps) {
        super({
            ...props,
            events: {
                click: () => this.goToPath(props.path as string)
            }
        });
    }

    public goToPath(path: string) {
        router.go(path);
    }

    public render() {
        return this.compile(linkTemplate, { ...this.props });
    }
}