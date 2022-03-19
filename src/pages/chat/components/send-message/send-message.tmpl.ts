export default `
div.chat-content__form
    form(id="chat-content__form" class="chat-content__form__form")
        label(for="input-file" class="chat-content__form__label")
            input(type="file" id="input-file" name="input-file" class="chat-content__form__label__input-file")
        input(type="text" name="message" class="chat-content__form__input")
        button.chat-content__form__button-send(type="submit")
`;