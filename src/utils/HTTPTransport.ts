import { Methods, RequestOptions } from './utils.types';

function queryStringify(data: Record<string, unknown>) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get<Response>(path: string, options: RequestOptions = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: Methods.Get });
    }

    public post<Response>(path: string, options: RequestOptions = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: Methods.Post });
    }

    public put<Response>(path: string, options: RequestOptions = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: Methods.Put });
    }

    public patch<Response>(path: string, options: RequestOptions = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: Methods.Patch });
    }

    public delete<Response>(path: string, options: RequestOptions = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: Methods.Delete });
    }

    private request<Response>(url: string, options: RequestOptions = {}): Promise<Response> {
        const {
            headers, method, data, isFile
        } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('Не задан метод');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Methods.Get;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            if (!isFile) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject({ reason: 'abort' });
            xhr.onerror = () => reject({ reason: 'error' });
            xhr.ontimeout = () => reject({ reason: 'timeout' });

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (isGet || !data) {
                xhr.send();
            } else {
                if (isFile) {
                    xhr.send(data);
                } else {
                    xhr.send(JSON.stringify(data));
                }
            }
        });
    }
}
