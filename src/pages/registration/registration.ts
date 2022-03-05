import { compile } from 'pug';
import Block from '../../utils/Block';
import registrationTemplate from './registration.tmpl';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { RegistrationProps } from './registration.types';

export default class Registration extends Block<RegistrationProps> {
    public constructor() {
        super(
            'div',
            {
                link_text: 'Войти',
                link: './login.html',
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
                name: new Input({
                    title: 'Имя',
                    type: 'text',
                    name: 'first_name',
                    required: 'true',
                    minlength: '3',
                    error_pattern: 'не менее 3х символов',
                    pattern: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$'
                }),
                last_name: new Input({
                    title: 'Фамилия',
                    type: 'text',
                    name: 'second_name',
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
                password: new Input({
                    title: 'Пароль',
                    type: 'password',
                    name: 'password',
                    required: 'true',
                    minlength: '8',
                    maxlength: '40',
                    error_pattern: 'не менее 8 символов',
                    pattern: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})'
                }),
                retype_password: new Input({
                    title: 'Пароль (ещё раз)',
                    type: 'password',
                    name: 'retype_password',
                    error_pattern: 'пароли не совпадают',
                    required: 'true'
                }),
                button: new Button({
                    text: 'Зарегистрироваться',
                    type: 'submit',
                    className: 'btn-primary'
                })
            },
        );
    }

    public handleSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData((e.target as HTMLFormElement));
        if (formData.get('retype_password') === formData.get('password')) {
            const data = {
                email: formData.get('email'),
                login: formData.get('login'),
                first_name: formData.get('first_name'),
                second_name: formData.get('second_name'),
                phone: formData.get('phone'),
                password: formData.get('password')
            };
            console.log(data);
        }
    }

    public render() {
        return this.compile(compile(registrationTemplate), { ...this.props });
    }
}
