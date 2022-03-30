const template = `
div.chat-content__chat__wrapper(id="messages")
    each message in messagesItems
        | !{message}
`;

export default template;