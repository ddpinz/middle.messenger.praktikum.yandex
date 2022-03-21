import error500Template from './error-500.tmpl';
import Block from '../../utils/Block';
import { Error500Props } from './error-500.types';

export default class Page500 extends Block<Error500Props> {
    public constructor() {
        super(
            {},
        );
    }

    public render() {
        return this.compile(error500Template, {});
    }
}
