import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';
import { MetaProps } from './utils.types';

const pug = require('pug');

export default abstract class Block<Props extends Record<string, unknown>> {
    private static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    private _element: HTMLElement;

    private readonly _meta: MetaProps;

    private eventBus: () => EventBus;

    public props: Record<string, unknown>;

    protected _id: string;

    protected children: Record<string, Block<Props>>;

    constructor(propsAndChildren: Props) {
        const eventBus = new EventBus();
        const { children, props } = this._getChildren(propsAndChildren);
        this._meta = {
            tagName: 'div',
            props
        };
        this.children = children;
        this._id = uuidv4();
        this.props = this._makePropsProxy({ ...props, __id: this._id });
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount() {
        this.componentDidMount();

        Object.values(this.children).forEach(child => {
            if (Array.isArray(child)) {
                child.forEach(elem => {
                    elem.dispatchComponentDidMount();
                });
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    public componentDidMount() {
        return true;
    }

    private _componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    public componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        return oldProps !== newProps;
    }

    public setProps = (nextProps: Record<string, unknown>) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    get id() {
        return this._id;
    }

    private _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
        }

        this._element = newElement;
        this._addEvents();
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    public getContent(): HTMLElement | null {
        return this.element;
    }

    private _getChildren(propsAndChildren: Props) {
        const children: Record<string, any> = {};
        const props: Record<string, any> = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(elem => {
                    if (elem instanceof Block) {
                        if (children[key]) {
                            children[key] = [...children[key], elem];
                        } else {
                            children[key] = [elem];
                        }
                    } else {
                        props[key] = elem;
                    }
                });
            } else {
                if (value instanceof Block) {
                    children[key] = value;
                } else {
                    props[key] = value;
                }
            }
        });

        return { children, props };
    }

    private _makePropsProxy = (props: Record<string, unknown>) => {
        const self = this;

        return new Proxy(props, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                // self.eventBus().emit(Block.EVENTS.FLOW_CDU);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    };

    private _createDocumentElement(tagName: string) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this._id);
        if (this._meta.tagClass) {
            element.classList.add(this._meta.tagClass);
        }
        return element;
    }

    public show() {
        this.getContent()!.style.display = 'block';
    }

    public hide() {
        this.getContent()!.style.display = 'none';
    }

    public toString() {
        return this._element.outerHTML;
    }

    private _addEvents() {
        const { events } = this.props as Record<string, EventListener>;
        if (!events) {
            return;
        }
        Object.entries(events).forEach(([eventName, cb]: [string, (e: Event) => void]) => this._element?.addEventListener(eventName, cb));
    }

    private _removeEvents() {
        const { events } = this.props as Record<string, EventListener>;
        if (!events) {
            return;
        }
        Object.entries(events).forEach(([eventName, cb]: [string, (e: Event) => void]) => {
            this._element.removeEventListener(eventName, cb);
        });
    }

    getChildren() {
        return this.children;
    }

    public compile(template: string, context: Record<string, unknown>) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                child.forEach((elem: Block<Props>) => {
                    if (context[key]) {
                        context[key] = `${context[key]}<div data-id="id-${elem._id}"></div>`;
                    } else {
                        context[key] = `<div data-id="id-${elem._id}"></div>`;
                    }
                });
            } else {
                context[key] = `<div data-id="id-${child._id}"></div>`;
            }
        });

        // @ts-ignore
        fragment.innerHTML = pug.render(template, { doctype: 'html', ...context });

        Object.values(this.children).forEach((child: Block<Props>) => {
            if (Array.isArray(child)) {
                child.forEach((elem: Block<Props>) => {
                    const stub = fragment.content.querySelector(`[data-id="id-${elem._id}"]`);
                    if (!stub) {
                        return;
                    }
                    stub.replaceWith(elem.getContent()!);
                });
            } else {
                const stub = fragment.content.querySelector(`[data-id="id-${child._id}"]`);
                if (!stub) {
                    return;
                }
                stub.replaceWith(child.getContent()!);
            }
        });

        return fragment.content;
    }
}
