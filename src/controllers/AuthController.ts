import AuthAPI, { SignInData, SignUpData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import { Props } from '../utils/helpers';

class AuthController {
    protected api: AuthAPI;

    constructor() {
        this.api = new AuthAPI();
    }

    async signUp(data: SignUpData) {
        await this.api.signUp(data);
        try {
            await this.getUser();
            router.go('/messenger');
        } catch (e) {
            router.go('/sign-up');
        }
    }

    async signIn(data: SignInData) {
        try{
            await this.api.signIn(data);
            store.set('loginError', '');
            try {
                await this.getUser();
                router.go('/messenger');
            } catch (e) {
                router.go('/');
            }
        } catch (e) {
            console.log(e.reason);
            store.set('loginError', e.reason);
        }
    }

    async logout() {
        await this.api.logout();
    }

    async getUser() {
        const user: Props = await this.api.getUser();
        user.avatar = `https://ya-praktikum.tech/api/v2/resources${user.avatar}`;

        store.set('currentUser', user);
    }
}

export default new AuthController();