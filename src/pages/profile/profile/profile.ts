import { compile } from 'pug';
import Block from '../../../utils/Block';
import profileTemplate from './profile.tmpl';
import ProfileLine from '../components/profile-line/profile-line';
import { ProfileProps } from './profile.types';

export default class Edit extends Block<ProfileProps> {
    public constructor() {
        super(
            'div',
            {
                email: new ProfileLine({
                    title: 'Почта',
                    value: 'pochta@yandex.ru'
                }),
                login: new ProfileLine({
                    title: 'Логин',
                    value: 'ivanivanov'
                }),
                first_name: new ProfileLine({
                    title: 'Имя',
                    value: 'Иван'
                }),
                second_name: new ProfileLine({
                    title: 'Фамилия',
                    value: 'Иванов'
                }),
                display_name: new ProfileLine({
                    title: 'Имя в чате',
                    value: 'Иван'
                }),
                phone: new ProfileLine({
                    title: 'Телефон',
                    value: '+79809999999'
                })
            },
        );
    }

    public render() {
        return this.compile(compile(profileTemplate), { ...this.props });
    }
}
