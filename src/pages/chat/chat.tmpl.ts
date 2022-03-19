export default `
div.layout
    div.chat
        div.chat-list
            div.chat-list__head
                | !{createChat}
                div.chat-list__head__logo
                | !{link2Profile}
            div.chat-list__search
                input(type="text" class="chat-list__search__input" placeholder="Поиск")
            div.chat-list__content
                | !{chats}
        div.chat-content
            div.chat-content__chat__head
                div.chat-content__chat__head__info
                    div.chat-content__chat__head__avatar(style="background-image: url('" + currentChat.avatar + "');")
                    div.chat-content__chat__head__title=currentChat.title
                | !{actionsPopup}
            div.chat-content__chat
                div.chat-content__chat__wrapper
                    | !{messages}
            | !{sendMessage}
`;