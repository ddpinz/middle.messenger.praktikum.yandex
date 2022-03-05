export default `
mixin profileLink(data)
    div.profile-form__line
        div.profile-form__line_title
            div(class=data.className onclick=data.onclick)=data.title

div.layout
    div.sidebar
        div.back-link(onclick="window.location.href='chat.html'")
    div.profile-form
        div
            div.profile-form__avatar
            | !{email}
            | !{login}
            | !{first_name}
            | !{second_name}
            | !{display_name}
            | !{phone}
        div.profile-form__button
            +profileLink({
                onclick: "window.location.href='edit-profile.html'",
                className: 'link-default',
                title: "Изменить данные"
            })
            +profileLink({
                onclick: "window.location.href='change-password.html'",
                className: "link-default",
                title: "Изменить пароль"
            })
            +profileLink({
                onclick: "window.location.href='login.html'",
                className: "link-warning",
                title: "Выйти"
            })
`;