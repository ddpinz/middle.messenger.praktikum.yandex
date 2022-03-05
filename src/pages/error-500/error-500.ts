import { compile } from 'pug';
import error500Template from './error-500.tmpl';
import Block from '../../utils/Block';
import { Error500Props } from './error-500.types';

export default class Page500 extends Block<Error500Props> {
    public constructor() {
        super(
            'div',
            {},
        );
    }

    public render() {
        return this.compile(compile(error500Template), {});
    }
}