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
};

type MetaProps = {
    tagName: string,
    props: Record<string, unknown>,
    tagClass?: string,
}

export {
    Methods,
    RequestOptions,
    MetaProps
};