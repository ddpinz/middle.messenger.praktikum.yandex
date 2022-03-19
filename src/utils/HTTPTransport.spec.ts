import { expect } from 'chai';
import HTTPTransport from './HTTPTransport';

describe('Проверяем что модуль отправки сообщений возвращает ошибки', () => {
    it('GET метод', async () => {
        const http = new HTTPTransport('http://my-fake-address.foo.bar.baz.com');
        try {
            await http.get('');
        } catch (error) {
            expect(error).not.equal(undefined);
        }
    });

    it('POST метод', async () => {
        const http = new HTTPTransport('http://my-fake-address.foo.bar.baz.com');
        try {
            await http.post('');
        } catch (error) {
            expect(error).not.equal(undefined);
        }
    });

    it('PUT метод', async () => {
        const http = new HTTPTransport('http://my-fake-address.foo.bar.baz.com');
        try {
            await http.put('');
        } catch (error) {
            expect(error).not.equal(undefined);
        }
    });

    it('DELETE метод', async () => {
        const http = new HTTPTransport('http://my-fake-address.foo.bar.baz.com');
        try {
            await http.delete('');
        } catch (error) {
            expect(error).not.equal(undefined);
        }
    });
});
