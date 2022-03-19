import { BaseAPI } from '../utils/BaseAPI';

export interface PasswordData {
    oldPassword: string;
    newPassword: string;
}

export interface ProfileData {
    first_name?: string,
    second_name?: string,
    display_name?: string,
    login?: string,
    email?: string,
    phone?: string
}

export default class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    update(data: ProfileData) {
        return this.http.put('/profile', { data });
    }

    read(id: number) {
        return this.http.get(`/${id}`);
    }

    updatePassword(data: PasswordData) {
        return this.http.put('/password', { data });
    }

    updateAvatar(data: FormData) {
        return this.http.put('/profile/avatar', { isFile: true, data });
    }
}
