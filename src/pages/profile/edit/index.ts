import Edit from './edit';
import renderDOM from '../../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const edit = new Edit();
    renderDOM('#root', edit);
});

export {
    Edit
};
