import { BaseAPI } from '../utils/BaseAPI';

export interface SignInData {
    login: string;
    password: string;
}

export interface SignUpData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export default class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signUp(data: SignUpData) {
        return this.http.post('/signup', { data });
    }

    signIn(data: SignInData) {
        return this.http.post('/signin', { data });
    }

    logout() {
        return this.http.post('/logout');
    }

    getUser() {
        return this.http.get('/user');
    }
}
