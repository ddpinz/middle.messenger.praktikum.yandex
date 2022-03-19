import Block from './Block';
import { isEqual } from './helpers';
import renderDOM from './renderDom';
import { TBlockConnect } from './utils.types';

export default class Route {
    private _pathname: string;

    private _blockClass: TBlockConnect<any>;

    private _block: Block<any> | null;

    private _props: Record<any, any>;

    constructor(pathname: string, view: TBlockConnect<any>, props: object) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block = null;
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            renderDOM(this._props.rootQuery, this._block);
            return;
        }
        this._block!.show();
    }
}