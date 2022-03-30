import router from '../src/utils/Router';
import { Login } from '../src/pages/login';
import { Registration } from '../src/pages/registration';
import { Profile } from '../src/pages/profile/profile';
import { Edit } from '../src/pages/profile/edit';
import { ChangePassword } from '../src/pages/profile/change-password';
import { Chat } from '../src/pages/chat';
import { Error404 } from '../src/pages/error-404';
import { Error500 } from '../src/pages/error-500';
import AuthController from '../src/controllers/AuthController';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await AuthController.getUser();
        const curPath = window.location.pathname;
        if (curPath === '/') router.go('/messenger');
    } catch (e) {
        router.go('/');
    }

    router.use('/', Login)
        .use('/sign-up', Registration)
        .use('/settings', Profile)
        .use('/settings/edit', Edit)
        .use('/settings/change-password', ChangePassword)
        .use('/messenger', Chat)
        .use('/404', Error404)
        .use('/500', Error500)
        .start();
});