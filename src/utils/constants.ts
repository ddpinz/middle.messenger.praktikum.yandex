const regExpConstants = {
    email: '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}',
    login: '[a-zA-Z0-9-_]*[a-zA-Z]{1}[a-zA-Z0-9-_]*',
    name: '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$',
    phone: '\\+?[0-9]{10,15}$',
    password: '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})'
};

const validationMessages = {
    email: 'адрес вида pochta@pochta.com',
    login: 'от 3 до 20 символов',
    name: 'не менее 3х символов',
    phone: 'номер телефона +79809999999',
    password: 'не менее 8 символов',
    passwordNotMatch: 'пароли не совпадают'
};

export {
    regExpConstants,
    validationMessages
};