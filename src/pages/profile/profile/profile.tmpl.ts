export default `
mixin profileLink(data)
    div.profile-form__line
        div.profile-form__line_title
            div(class=data.className onclick=data.onclick)=data.title

div.layout
    div.sidebar
        | !{go2Chat}
    div.profile-form
        div
            div
                div.profile-form__avatar
            | !{email}
            | !{login}
            | !{firstName}
            | !{secondName}
            | !{displayName}
            | !{phone}
        div.profile-form__button
            |  !{edit}
            |  !{changePassword}
            |  !{logout}
`;