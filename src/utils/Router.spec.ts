import { expect } from 'chai';
import router from './router';
import Route from './route';
import { Login } from '../pages/login';
import { Registration } from '../pages/registration';
import { Chat } from '../pages/chat';

describe('Проверяем получение роута у роутера', () => {
    it('Проверяем что находит существующий роут', () => {
        router
            .use('/', Login)
            .use('/signup', Registration)
            .use('/messenger', Chat)
            .start();

        const route = router.getRoute('/');

        expect(route instanceof Route).to.eq(true);
    });

    it('Проверяем что не находит несуществующий роут', () => {
        router.start();
        const route = router.getRoute('/does-not-exist');
        console.log(route);

        expect(route).to.eq(undefined);
    });
});
