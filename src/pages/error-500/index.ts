import Error500 from './error-500';
import renderDOM from '../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const error500 = new Error500();
    renderDOM('#root', error500);
});

export {
    Error500
};
