import Block from '../../../utils/Block';
import router from '../../../utils/Router';
import store, { StoreData, connect } from '../../../utils/Store';
import profileTemplate from './profile.tmpl';
import ProfileLine from '../components/profile-line/profile-line';
import ProfileLink from '../components/profile-link/profile-link';
import { ProfileProps } from './profile.types';
import AuthController from '../../../controllers/AuthController';
import { Link } from '../../../components/link';

class Profile extends Block<ProfileProps> {
    public constructor(props) {
        super(
            {
                email: new ProfileLine({
                    title: 'Почта',
                    value: props?.email
                }),
                login: new ProfileLine({
                    title: 'Логин',
                    value: props?.login
                }),
                firstName: new ProfileLine({
                    title: 'Имя',
                    value: props?.first_name
                }),
                secondName: new ProfileLine({
                    title: 'Фамилия',
                    value: props?.second_name
                }),
                displayName: new ProfileLine({
                    title: 'Имя в чате',
                    value: props?.display_name
                }),
                phone: new ProfileLine({
                    title: 'Телефон',
                    value: props?.phone
                }),
                edit: new ProfileLink({
                    title: 'Изменить данные',
                    className: 'link-default',
                    events: {
                        click: () => this.editProfile()
                    }
                }),
                changePassword: new ProfileLink({
                    title: 'Изменить пароль',
                    className: 'link-default',
                    events: {
                        click: () => this.changePassword()
                    }
                }),
                logout: new ProfileLink({
                    title: 'Выйти',
                    className: 'link-warning',
                    events: {
                        click: () => this.logout()
                    }
                }),
                go2Chat: new Link({
                    className: 'back-link',
                    path: '/messenger'
                })
            },
        );
    }

    public editProfile() {
        router.go('/settings/edit');
    }

    public changePassword() {
        router.go('/settings/change-password');
    }

    public logout() {
        AuthController.logout();
        router.go('/');
    }

    public render() {
        return this.compile(profileTemplate, { ...this.props });
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

export default connect(Profile, mapStateToProps);