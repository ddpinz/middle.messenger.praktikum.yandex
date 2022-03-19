import Block from '../../utils/Block';
import loginTemplate from './login.tmpl';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Link from '../../components/link/link';
import { LoginProps } from './login.types';
import router from '../../utils/Router';
import AuthController from '../../controllers/AuthController';
import { SignInData } from '../../api/AuthAPI';

export default class Login extends Block<LoginProps> {
    public constructor() {
        super(
            {
                link: new Link({
                    text: 'Нет аккаунта?',
                    className: 'link',
                    path: '/sign-up'
                }),
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
                AuthController.signIn(data as SignInData);
            }
        }
    }

    public goToPath(path: string) {
        router.go(path);
    }

    public render() {
        return this.compile(loginTemplate, { ...this.props });
    }
}
