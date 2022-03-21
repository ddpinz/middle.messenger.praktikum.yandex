import { BaseAPI } from '../utils/BaseAPI';

interface ChatFilters {
    offset?: number;
    limit?: number;
    title?: string;
}

interface ChatData {
    title?: string;
}

interface ChatUser {
    users?: number [];
    chatId?: number;
}

interface ChatAvatar {
    chatId?: number;
    avatar?: FormData;
}

export default class ChatAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    read(data: ChatFilters) {
        return this.http.get('', { data });
    }

    create(data: ChatData) {
        return this.http.post('', { data });
    }

    delete(chatId: number) {
        return this.http.delete('', { data: { chatId } });
    }

    addUser(data: ChatUser) {
        return this.http.put('/users', { data });
    }

    getUsers(id: number, data: ChatFilters) {
        return this.http.get(`/${id}/users`, { data });
    }

    getNewMessagesCount(id: number) {
        return this.http.get(`/new/${id}`, {});
    }

    deleteUser(data: ChatUser) {
        return this.http.delete('/users', { data });
    }

    updateAvatar(data: ChatAvatar) {
        return this.http.put('/avatar', { data, isFile: true });
    }

    getChatToken(id: number) {
        return this.http.post(`/token/${id}`);
    }
}
