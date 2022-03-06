export default `
mixin chatPerson(data)
    div.chat-list__content__item
        div.chat-list__content__item__avatar
        div.chat-list__content__item__text
            div.chat-list__content__item__text__name=data.name
            div.chat-list__content__item__text__message=data.message
            
div.layout
    div.chat
        div.chat-list
            div.chat-list__head
                div.chat-list__head__add-chat Новый чат
                div.chat-list__head__logo
                div.chat-list__head__profile(onclick="window.location.href='profile.html'") Профиль
            div.chat-list__search
                input(type="text" class="chat-list__search__input" placeholder="Поиск")
            div.chat-list__content
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Катя", message: "Пока"})
                +chatPerson({name: "Женя", message: "Йохохо"})
                +chatPerson({name: "Капитан Воробей", message: "и бутылка рому"})
                +chatPerson({name: "Киноклуб", message: "закрыт"})
                +chatPerson({name: "Мемасики", message: "открыт"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
                +chatPerson({name: "Вася", message: "Привет"})
        div.chat-content
            div.chat-content__chat__head
                div.chat-content__chat__head__info
                    div.chat-content__chat__head__avatar
                    div.chatcontent__chat__head__title Киноклуб
                div.chat-content__chat__head__actions
            div.chat-content__chat
                div.chat-content__chat__wrapper
                    div.chat-content__chat__message
                        div.date
                        div Because of this line, all of the rules marked "✓" on the rules page will be turned on. Alternatively, you can use configurations that others have created by searching for "eslint-config" on npmjs.com. ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.
                    div.chat-content__chat__message.chat-content__chat__message-own
                        div.date
                        div Message1
                    div.chat-content__chat__message
                        div.date
                        div Message2
                    div.chat-content__chat__message.chat-content__chat__message-own
                        div.date
                        div Message3
                    div.chat-content__chat__message
                        div.date
                        div Because of this line, all of the rules marked "✓" on the rules page will be turned on. Alternatively, you can use configurations that others have created by searching for "eslint-config" on npmjs.com. ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.
                    div.chat-content__chat__message.chat-content__chat__message-own
                        div.date
                        div Message4
                    div.chat-content__chat__message
                        div.date
                        div Message5
                    div.chat-content__chat__message.chat-content__chat__message-own
                        div.date
                        div Message6
                    div.chat-content__chat__message
                        div.date
                        div Because of this line, all of the rules marked "✓" on the rules page will be turned on. Alternatively, you can use configurations that others have created by searching for "eslint-config" on npmjs.com. ESLint will not lint your code unless you extend from a shared configuration or explicitly turn rules on in your configuration.
                    div.chat-content__chat__message.chat-content__chat__message-own
                        div.date
                        div Message7
                    div.chat-content__chat__message
                        div.date
                        div Message8
                    div.chat-content__chat__message.chat-content__chat__message-own
                        div.date
                        div Message9
            div.chat-content__form
                form(id="chat-content__form" class="chat-content__form__form")
                    label(for="input-file" class="chat-content__form__label")
                        input(type="file" id="input-file" name="input-file" class="chat-content__form__label__input-file")
                    input(type="text" name="message" class="chat-content__form__input")
                    button.chat-content__form__button-send(type="submit")
`;