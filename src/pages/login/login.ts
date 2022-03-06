import Block from '../../utils/Block';
import loginTemplate from './login.tmpl';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { LoginProps } from './login.types';

export default class Login extends Block<LoginProps> {
    public constructor() {
        super(
            'div',
            {
                linkText: 'Нет аккаунта?',
                link: './registration.html',
                events: {
                    submit: (e: Event) => this.handleSubmit(e)
                },
                login: new Input({
                    title: 'Логин',
                    type: 'text',
                    name: 'login',
                    required: 'true',
                    errorPattern: 'Введите логин'
                }),
                password: new Input({
                    title: 'Пароль',
                    type: 'password',
                    name: 'password',
                    required: 'true',
                    errorPattern: 'Введите пароль'
                }),
                button: new Button({
                    text: 'Авторизоваться',
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
            login: formData.get('login'),
            password: formData.get('password')
        };
        if (e.target) {
            const formIsValid = (e.target as HTMLFormElement).closest('form')!.checkValidity();
            if (formIsValid) {
                console.log(data);
            }
        }
    }

    public render() {
        return this.compile(loginTemplate, { ...this.props });
    }
}
