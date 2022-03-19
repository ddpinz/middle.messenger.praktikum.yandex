import Block from '../../utils/Block';
import registrationTemplate from './registration.tmpl';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Link from '../../components/link/link';
import { RegistrationProps } from './registration.types';
import { regExpConstants, validationMessages } from '../../utils/constants';
import AuthController from '../../controllers/AuthController';
import { SignUpData } from '../../api/AuthAPI';

export default class Registration extends Block<RegistrationProps> {
    public constructor() {
        super(
            {
                link: new Link({
                    text: 'Войти',
                    className: 'link',
                    path: '/'
                }),
                events: {
                    submit: (e: Event) => this.handleSubmit(e)
                },
                email: new Input({
                    title: 'Почта',
                    type: 'email',
                    name: 'email',
                    required: 'true',
                    errorPattern: validationMessages.email,
                    pattern: regExpConstants.email
                }),
                login: new Input({
                    title: 'Логин',
                    type: 'text',
                    name: 'login',
                    required: 'true',
                    minlength: '3',
                    maxlength: '20',
                    errorPattern: validationMessages.login,
                    pattern: regExpConstants.login
                }),
                name: new Input({
                    title: 'Имя',
                    type: 'text',
                    name: 'first_name',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                lastName: new Input({
                    title: 'Фамилия',
                    type: 'text',
                    name: 'second_name',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                phone: new Input({
                    title: 'Телефон',
                    type: 'phone',
                    name: 'phone',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.phone,
                    pattern: regExpConstants.phone
                }),
                password: new Input({
                    title: 'Пароль',
                    type: 'password',
                    name: 'password',
                    required: 'true',
                    minlength: '8',
                    maxlength: '40',
                    errorPattern: validationMessages.password,
                    pattern: regExpConstants.password
                }),
                retypePassword: new Input({
                    title: 'Пароль (ещё раз)',
                    type: 'password',
                    name: 'retype_password',
                    pattern: regExpConstants.password,
                    errorPattern: validationMessages.passwordNotMatch,
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

    comparePassword() {
        const children = this.getChildren();
        const password = Object.values(children).find(input => input.props?.name === 'password');
        const retypePassword = Object.values(children).find(input => input.props?.name === 'retype_password');
        (retypePassword as Input)?.compare(retypePassword?.props.inputValue as string, password?.props.inputValue as string);
    }

    public handleSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData((e.target as HTMLFormElement));
        this.comparePassword();
        if (formData.get('retype_password') === formData.get('password')) {
            const data = {
                email: formData.get('email'),
                login: formData.get('login'),
                first_name: formData.get('first_name'),
                second_name: formData.get('second_name'),
                phone: formData.get('phone'),
                password: formData.get('password')
            };
            AuthController.signUp(data as SignUpData);
            console.log(data);
        }
    }

    public render() {
        return this.compile(registrationTemplate, { ...this.props });
    }
}
