export default `
mixin buttonForm(data)
    div(class="button")
        button(class=data.className type=data.type onclick=data.onclick)=data.text
    
div.layout
    div.error-page
        div
            div.error-page__image
                div.error-page__image__500
            h3.error-page__title 500
            p.error-page__message Мы уже фиксим

        div.error-page__button
            +buttonForm({
                className: "btn-primary",
                text: "Назад к чатам",
                type: "button",
                onclick: "window.location.href='chat.html'"
            })
`;