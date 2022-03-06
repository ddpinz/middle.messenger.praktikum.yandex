import Profile from './profile';
import renderDOM from '../../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const edit = new Profile();
    renderDOM('#root', edit);
});

export {
    Profile
};
