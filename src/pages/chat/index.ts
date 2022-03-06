import Chat from './chat';
import renderDOM from '../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const chat = new Chat();
    renderDOM('#root', chat);
});

export {
    Chat
};
