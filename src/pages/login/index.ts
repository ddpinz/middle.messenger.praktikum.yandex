import Login from './login';
import renderDOM from '../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const login = new Login();
    renderDOM('#root', login);
});

export {
    Login
};
