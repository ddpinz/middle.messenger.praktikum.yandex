import Block from "./Block";

enum Methods {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE',
}

type RequestOptions = {
    method?: Methods;
    headers?: Record<string, string>;
    timeout?: number;
    data?: any;
    isFile?: boolean;
};

type MetaProps = {
    tagName: string,
    props: Record<string, unknown>,
    tagClass?: string,
}

type TBlock<T extends Record<string, unknown>> = Block<T>;

type TBlockConnect<T extends Record<string, unknown>> = new (...args:any[])=>Block<T>;


export {
    Methods,
    RequestOptions,
    MetaProps,
    TBlock,
    TBlockConnect
};