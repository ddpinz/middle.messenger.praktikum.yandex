import Block from './Block';

export default function renderDOM(rootSelector: string, component: Block<Record<string, unknown>>) {
    const root = document.querySelector(rootSelector);
    if (!root) {
        throw new Error('Не задан элемент DOM');
    }

    component.dispatchComponentDidMount();

    root.innerHTML = '';

    root.append(component.getContent()!);
}
