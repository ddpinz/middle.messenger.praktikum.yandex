import Block from '../../../utils/Block';
import editTemplate from './edit.tmpl';
import Input from '../../../components/profile-input/input';
import Button from '../../../components/button/button';
import { EditProps } from './edit.types';
import { regExpConstants, validationMessages } from '../../../utils/constants';

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
                firstName: new Input({
                    title: 'Имя',
                    type: 'text',
                    name: 'first_name',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                secondName: new Input({
                    title: 'Фамилия',
                    type: 'text',
                    name: 'second_name',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                displayName: new Input({
                    title: 'Имя в чате',
                    type: 'text',
                    name: 'display_name',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                phone: new Input({
                    title: 'Телефон',
                    type: 'tel',
                    name: 'phone',
                    required: 'true',
                    minlength: '3',
                    errorPattern: validationMessages.phone,
                    pattern: regExpConstants.phone
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
        return this.compile(editTemplate, { ...this.props });
    }
}
