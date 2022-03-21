export default `
div.chat-list__content__item(data-chat-data=chat)
    div.chat-list__content__item__avatar
        if avatar
            img(src=avatar)
    div.chat-list__content__item__text
        div.chat-list__content__item__text__name=title
        div.chat-list__content__item__text__message
            if last_message
                span.chat-list__content__item__text__message-user=display_name
                span.chat-list__content__item__text__message-content=last_message.content
    div.chat-list__content__item__text__status
        p.date=date
        if unread_count > 0
            p.count=unread_count
`;