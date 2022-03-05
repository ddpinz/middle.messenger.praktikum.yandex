import { compile } from 'pug';
import Block from '../../../utils/Block';
import editTemplate from './edit.tmpl';
import Input from '../../../components/profile-input/input';
import Button from '../../../components/button/button';
import { EditProps } from './edit.types';

export default class Edit extends Block<EditProps> {
    public constructor() {
        super(
            'div',
            {
                events: {
                    submit: (e: Event) => this.handleSubmit(e)
                },
                email: new Input({
                    title: 'Почта',
                    type: 'email',
                    name: 'email',
                    required: 'true',
                    error_pattern: 'адрес вида pochta@pochta.com',
                    pattern: '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}'
                }),
                login: new Input({
                    title: 'Логин',
                    type: 'text',
                    name: 'login',
                    required: 'true',
                    minlength: '3',
                    maxlength: '20',
                    error_pattern: 'от 3 до 20 символов',
                    pattern: '[a-zA-Z0-9-_]*[a-zA-Z]{1}[a-zA-Z0-9-_]*'
                }),
                first_name: new Input({
                    title: 'Имя',
                    type: 'text',
                    name: 'first_name',
                    required: 'true',
                    minlength: '3',
                    error_pattern: 'не менее 3х символов',
                    pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$'
                }),
                second_name: new Input({
                    title: 'Фамилия',
                    type: 'text',
                    name: 'second_name',
                    required: 'true',
                    minlength: '3',
                    error_pattern: 'не менее 3х символов',
                    pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$'
                }),
                display_name: new Input({
                    title: 'Имя в чате',
                    type: 'text',
                    name: 'display_name',
                    required: 'true',
                    minlength: '3',
                    error_pattern: 'не менее 3х символов',
                    pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$'
                }),
                phone: new Input({
                    title: 'Телефон',
                    type: 'tel',
                    name: 'phone',
                    required: 'true',
                    minlength: '3',
                    error_pattern: 'номер телефона +79809999999',
                    pattern: '^\\+?[0-9]{10,15}$'
                }),
                button: new Button({
                    text: 'Сохранить',
                    type: 'submit',
                    className: 'btn-primary'
                })
            },
        );
    }

    public handleSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData((e.target as HTMLFormElement));
        const data = {
            email: formData.get('email'),
            login: formData.get('login'),
            first_name: formData.get('first_name'),
            second_name: formData.get('second_name'),
            display_name: formData.get('display_name'),
            phone: formData.get('phone')
        };
        if (e.target) {
            const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
            if (formIsValid) {
                console.log(data);
            }
        }
    }

    public render() {
        return this.compile(compile(editTemplate), { ...this.props });
    }
}
