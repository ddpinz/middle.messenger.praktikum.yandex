export default `
div.layout
    div.sidebar
        | !{go2Settings}
    form.profile-form
        div
            | !{avatar}
            | !{email}
            | !{login}
            | !{firstName}
            | !{secondName}
            | !{displayName}
            | !{phone}
        div.profile-form__button
            | !{button}
`;