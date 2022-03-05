export default `
div.layout
    div.sidebar
        div.back-link(onclick="window.location.href='chat.html'")
    div.profile-form
        div
            div.profile-form__avatar
            | !{oldPassword}
            | !{newPassword}
            | !{retype_newPassword}
        div.profile-form__button
            | !{button}
`;