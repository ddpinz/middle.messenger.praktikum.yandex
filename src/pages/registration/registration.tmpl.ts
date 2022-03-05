export default `
div.layout
    form(action="")
        div.login-form
            div
                h3 Вход
                | !{email}
                | !{login}
                | !{name}
                | !{last_name}
                | !{phone}
                | !{password}
                | !{retype_password}
            div
                | !{button}
                a(class="link" href=link) #{link_text}
`;