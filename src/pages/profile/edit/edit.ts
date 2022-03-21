import Block from '../../../utils/Block';
import editTemplate from './edit.tmpl';
import Input from '../../../components/profile-input/input';
import Button from '../../../components/button/button';
import { EditProps } from './edit.types';
import { regExpConstants, validationMessages } from '../../../utils/constants';
import Avatar from '../components/avatar/avatar';
import { Link } from '../../../components/link';
import { connect, StoreData } from '../../../utils/Store';
import UserController from "../../../controllers/UserController";

class Edit extends Block<EditProps> {
    public constructor(props) {
        super(
            {
                events: {
                    submit: (e: Event) => this.handleSubmit(e)
                },
                avatar: new Avatar({}),
                email: new Input({
                    title: 'Почта',
                    type: 'email',
                    name: 'email',
                    required: 'true',
                    inputValue: props.email,
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
                    inputValue: props.login,
                    errorPattern: validationMessages.login,
                    pattern: regExpConstants.login
                }),
                firstName: new Input({
                    title: 'Имя',
                    type: 'text',
                    name: 'first_name',
                    required: 'true',
                    minlength: '3',
                    inputValue: props.first_name,
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                secondName: new Input({
                    title: 'Фамилия',
                    type: 'text',
                    name: 'second_name',
                    required: 'true',
                    minlength: '3',
                    inputValue: props.second_name,
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                displayName: new Input({
                    title: 'Имя в чате',
                    type: 'text',
                    name: 'display_name',
                    required: 'true',
                    minlength: '3',
                    inputValue: props.display_name,
                    errorPattern: validationMessages.name,
                    pattern: regExpConstants.name
                }),
                phone: new Input({
                    title: 'Телефон',
                    type: 'tel',
                    name: 'phone',
                    required: 'true',
                    minlength: '3',
                    inputValue: props.phone,
                    errorPattern: validationMessages.phone,
                    pattern: regExpConstants.phone
                }),
                button: new Button({
                    text: 'Сохранить',
                    type: 'submit',
                    className: 'btn-primary'
                }),
                go2Settings: new Link({
                    className: 'back-link',
                    path: '/settings'
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
                UserController.update(data);
                console.log(data);
            }
        }
    }

    public render() {
        return this.compile(editTemplate, { ...this.props });
    }
}

function mapStateToProps(state: StoreData) {
    return {
        id: state?.currentUser?.id,
        first_name: state?.currentUser?.first_name,
        second_name: state?.currentUser?.second_name,
        display_name: state?.currentUser?.display_name,
        login: state?.currentUser?.login,
        email: state?.currentUser?.email,
        phone: state?.currentUser?.phone,
        avatar: state?.currentUser?.avatar
    };
}

export default connect(Edit, mapStateToProps);