import ChatAPI from '../api/ChatAPI';
import store from '../utils/Store';
import ChatItem from '../pages/chat/components/chat-item';
import ChatMessage from '../pages/chat/components/chat-message';
import { Props } from '../utils/helpers';

class ChatController {
    protected api: ChatAPI;

    constructor() {
        this.api = new ChatAPI();
    }

    async read(data: Props) {
        const chats = await this.api.read(data);
        const arrOfChats = (chats as []).map((item: any) => new ChatItem({
            avatar: item.avatar && `https://ya-praktikum.tech/api/v2/resources${item.avatar}`,
            title: item.title,
            last_message: item.last_message,
            last_message_content: item?.last_message?.content || '',
            user: item?.last_message?.user || {},
            display_name: item?.last_message?.user?.display_name || item?.last_message?.user?.first_name || '',
            date: item?.last_message?.time ? new Date(item?.last_message?.time).toLocaleTimeString() : '',
            unread_count: item.unread_count,
            id: item.id,
            chat: item
        }));

        store.set('сhat', [...chats as []]);
        store.set('chatItems', arrOfChats);
    }

    async create(data: Props) {
        await this.api.create(data);
        await this.read({ limit: 1000 });
    }

    async setCurrentChat(chat: Props | null) {
        store.set('currentChat', chat);
        if (chat === null) return;
        try {
            const response = await this.api.getChatToken(chat.id);
            // @ts-ignore
            const { token } = response;
            if (token) {
                const { currentUser } = store.getState();
                const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${currentUser.id}/${chat.id}/${token}`);
                store.set('socket', socket);
                store.set('messages', []);
                store.set('messagesItems', []);
                setInterval(
                    () => {
                        socket.send(JSON.stringify({ type: 'ping' }));
                    },
                    30000,
                );
                socket.addEventListener('message', event => {
                    const { messages, currentUser } = store.getState();
                    const { id } = currentUser;
                    let messagesStore = [];
                    const data = JSON.parse(event.data);
                    if (data.type !== 'pong' && data.type !== 'user connected') {
                        if (messages) {
                            messagesStore = Array.isArray(data) ? [...data, ...messages] : [data, ...messages];
                        } else {
                            messagesStore = Array.isArray(data) ? [...data] : [data];
                        }
                        console.log(messagesStore);
                        const messagesItems = messagesStore.map(message => new ChatMessage({
                            className: message.user_id === id ? 'chat-content__chat__message chat-content__chat__message-own' : 'chat-content__chat__message',
                            chat_id: message.chat_id,
                            content: message.content,
                            file: message.file,
                            id: message.id,
                            is_read: message.is_read,
                            time: message.time,
                            type: message.type,
                            user_id: message.user_id
                        }));
                        console.log(messagesItems);
                        store.set('messages', messagesStore);
                        store.set('messagesItems', messagesItems);
                    }
                });
                socket.addEventListener('open', () => {
                    socket.send(JSON.stringify({
                        content: '0',
                        type: 'get old'
                    }));
                });
            } else {
                throw new Error('not valid');
            }
        } catch (error) {
            console.log(error);
        }
    }

    async sendMessage(message: string) {
        const { socket } = store.getState();
        if (socket) {
            socket.send(
                JSON.stringify({
                    content: message,
                    type: 'message'
                })
            );
        }
    }

    async addUser(chatId: number, userId: number) {
        const data = {
            users: [userId],
            chatId
        };
        this.api.addUser(data);
    }

    async deleteUser(chatId: number, userId: number) {
        const data = {
            users: [userId],
            chatId
        };
        this.api.deleteUser(data);
    }

    async updateAvatar(chatId: number, data: FormData) {
        const chat = await this.api.updateAvatar({ chatId, avatar: data });
        const avatar = `https://ya-praktikum.tech/api/v2/resources${(chat as Props).avatar}`;

        store.set('currentChat.avatar', avatar);
    }
}

export default new ChatController();