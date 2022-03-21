import error404Template from './error-404.tmpl';
import Block from '../../utils/Block';
import { Error404Props } from './error-404.types';

export default class Page404 extends Block<Error404Props> {
    public constructor() {
        super(
            {},
        );
    }

    public render() {
        return this.compile(error404Template, {});
    }
}
