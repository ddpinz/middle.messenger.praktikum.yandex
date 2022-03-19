export type Props = Record<string, any>;
export type PlainObject<T = unknown> = {
    [k in string]: T;
};

export function merge(lhs: Props, rhs: Props) {
    // eslint-disable-next-line no-restricted-syntax
    for (const p in rhs) {
        // eslint-disable-next-line no-prototype-builtins
        if (!rhs.hasOwnProperty(p)) {
            // eslint-disable-next-line no-continue
            continue;
        }
        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p], rhs[p]);
            } else {
                lhs[p] = rhs[p];
            }
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
};

export function set(object: Props, path: string, value: any) {
    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }
    if (typeof object !== 'object') {
        return object;
    }
    const result = path.split('.').reduceRight(
        (acc, key) => ({
            [key]: acc
        }),
        value as any
    );
    return merge(object, result);
};

export function isEqual(lhs: any, rhs: any) {
    return lhs === rhs;
};

export function isEqualObject(lhs: PlainObject, rhs: PlainObject) {
    // Сравнение количества ключей объектов и массивов
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    for (const [
        key,
        value
    ] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            // Здесь value и rightValue может быть только массивом или объектом
            // И TypeScript это обрабатывает
            if (isEqual(value as PlainObject, rightValue as PlainObject)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}

export function isArrayOrObject(value: unknown): value is [] | PlainObject {
    return isPlainObject(value) || isArray(value);
}

export function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

export function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

export function isEmpty(value: any): boolean {
    if (typeof value === 'number' || typeof value === 'boolean' || value === undefined || !value) {
        return true;
    }
    if (value?.length > 0) return false;
    if (value?.size > 0) return false;
    if (Object.keys(value).length > 0) return false;
    return true;
}

type StringIndexed = Record<string, any>;

export function queryStringify(data: StringIndexed): string | never {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        const value = data[key];
        const endLine = index < keys.length - 1 ? '&' : '';

        if (Array.isArray(value)) {
            const arrayValue = value.reduce<StringIndexed>(
                (result, arrData, index) => ({
                    ...result,
                    [`${key}[${index}]`]: arrData
                }),
                {}
            );

            return `${result}${queryStringify(arrayValue)}${endLine}`;
        }

        if (typeof value === 'object') {
            const objValue = Object.keys(value || {}).reduce<StringIndexed>(
                (result, objKey) => ({
                    ...result,
                    [`${key}[${objKey}]`]: value[objKey]
                }),
                {}
            );

            return `${result}${queryStringify(objValue)}${endLine}`;
        }

        return `${result}${key}=${value}${endLine}`;
    }, '');
}
