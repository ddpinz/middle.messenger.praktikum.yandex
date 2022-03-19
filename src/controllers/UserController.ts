import UserAPI, { PasswordData, ProfileData } from '../api/UserAPI';
import store from '../utils/Store';

class UserController {
    protected api: UserAPI;

    constructor() {
        this.api = new UserAPI();
    }

    async update(data: ProfileData) {
        const user = await this.api.update(data);
        user.avatar = `https://ya-praktikum.tech/api/v2/resources${user.avatar}`;

        store.set('currentUser', user);
    }

    async read(id: number) {
        await this.api.read(id);
    }

    async updatePassword(data: PasswordData) {
        await this.api.updatePassword(data);
    }

    async updateAvatar(data: FormData) {
        const user = await this.api.updateAvatar(data);
        user.avatar = `https://ya-praktikum.tech/api/v2/resources${user.avatar}`;

        store.set('currentUser', user);
    }
}

export default new UserController();