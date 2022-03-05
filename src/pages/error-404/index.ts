import Error404 from './error-404';
import renderDOM from '../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const error404 = new Error404();
    renderDOM('#root', error404);
});

export {
    Error404
};
