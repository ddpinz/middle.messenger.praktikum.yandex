import { expect } from 'chai';
import Block from './Block';
import { Props } from './helpers';

const template = 'h1= foo';

class TestComponent extends Block<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

describe('Проверяем работу компонента', () => {
    it('Проверяем что рендер работает правильно', () => {
        const component = new TestComponent({
            foo: 'Testing'
        });

        const fragment = component.render() as DocumentFragment;
        expect(fragment.querySelector('h1')?.textContent).to.equal('Testing');
    });
});
