import Block from '../../utils/Block';
import modalTemplate from './modal.tmpl';

type ModalProps = {
    id?: string;
    className?: string;
    content?: any;
    attributes?: Record<string, any>;
    events?: {
        click: (e: Event) => void;
    }
}

class Modal extends Block<ModalProps> {
    constructor(props: ModalProps) {
        super({
            ...props,
            content: props.content,
            className: 'modal',
            id: props.id,
            events: {
                click: (e: PointerEvent) => {
                    e.stopPropagation();
                    const target: Element = e.target as Element;
                    const element: Element | null = document.querySelector(
                        `#${props.id}`
                    );
                    if (element) {
                        if (target === element) {
                            element.classList.remove('modal_show');
                        }
                    }
                }
            }
        });
    }

    render() {
        return this.compile(modalTemplate, {...this.props});
    }
}

export default Modal;