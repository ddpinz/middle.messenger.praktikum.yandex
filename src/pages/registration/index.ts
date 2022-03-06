import Registration from './registration';
import renderDOM from '../../utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
  const login = new Registration();
  renderDOM('#root', login);
});

export {
  Registration,
};
