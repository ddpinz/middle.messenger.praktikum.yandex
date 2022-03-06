import Block from '../../../utils/Block';
import changePasswordTemplate from './change-password.tmpl';
import Input from '../../../components/profile-input/input';
import Button from '../../../components/button/button';
import { ChangePasswordProps } from './change-password.types';

export default class ChangePassword extends Block<ChangePasswordProps> {
    public constructor() {
        super(
            'div',
            {
                events: {
                    submit: (e: Event) => this.handleSubmit(e)
                },
                oldPassword: new Input({
                    title: 'Старый пароль',
                    type: 'password',
                    name: 'oldPassword',
                    required: 'true',
                    errorPattern: 'Введите старый пароль'
                }),
                newPassword: new Input({
                    title: 'Новый пароль',
                    type: 'password',
                    name: 'newPassword',
                    required: 'true',
                    errorPattern: 'Введите новый пароль'
                }),
                retypeNewPassword: new Input({
                    title: 'Повторите новый пароль',
                    type: 'password',
                    name: 'retype_newPassword',
                    required: 'true',
                    errorPattern: 'Повторите новый пароль'
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
        if (formData.get('newPassword') === formData.get('retype_newPassword')) {
            const data = {
                oldPassword: formData.get('oldPassword'),
                newPassword: formData.get('newPassword'),
                retypeNewPassword: formData.get('retype_newPassword'),
            };
            console.log(data);
        }
    }

    public render() {
        return this.compile(changePasswordTemplate, { ...this.props });
    }
}
