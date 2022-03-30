import EventBus from './EventBus';
import Block from './Block';
import {
    isEqualObject, Props, set
} from './helpers';

export enum StoreEvents {
    Updated = 'updated',
}

interface User {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface StoreData {
    currentUser: User;
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
    public state: Props = {};

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value);

        // метод EventBus
        this.emit(StoreEvents.Updated);
    }
}

const store = new Store();

export default store;

export function connect(Component: typeof Block, mapStateToProps: (state: Props) => Props) {
    let state;
    // используем class expression
    return class extends Component<any> {
        private state: any;

        constructor(props: Props) {
            state = mapStateToProps(store.getState());

            super({ ...props, ...state });

            this.state = state;
            // подписываемся на событие
            store.on(StoreEvents.Updated, () => {
                const newState = mapStateToProps(store.getState());

                if (!isEqualObject(this.state, newState)) {
                    // вызываем обновление компонента, передав данные из хранилища
                    this.setProps({ ...mapStateToProps(store.getState()) });
                }
            });
        }
    };
}