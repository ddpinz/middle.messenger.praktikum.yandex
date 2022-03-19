type AvatarProps = {
    events?: {
        change: (e: Event) => void;
    }
    title?: string;
    value?: string;
    avatar?: string;
}

export {
    AvatarProps
};
