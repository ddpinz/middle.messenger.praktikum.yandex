export default `
div.layout
    div.sidebar
        div.back-link(onclick="window.location.href='chat.html'")
    div.profile-form
        div
            div.profile-form__avatar
                input(type="file" class="profile-form__input-file" id="avatar-input" name="avatar")
                label(for="avatar-input" class="profile-form__input-file__label")
                    span Поменять аватар
            | !{email}
            | !{login}
            | !{first_name}
            | !{second_name}
            | !{display_name}
            | !{phone}
        div.profile-form__button
            | !{button}
`;