export default `
div.layout
    div.sidebar
        | !{backLink}
    form.profile-form
        div
            div
                div.profile-form__avatar
            | !{oldPassword}
            | !{newPassword}
            | !{retypeNewPassword}
        div.profile-form__button
            | !{button}
`;