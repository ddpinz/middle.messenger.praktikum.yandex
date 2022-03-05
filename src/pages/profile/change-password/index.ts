import ChangePassword from './change-password';
import renderDOM from '../../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const changePassword = new ChangePassword();
    renderDOM('#root', changePassword);
});

export {
  ChangePassword
};
