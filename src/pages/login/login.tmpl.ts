export default `
div.layout
    form(action="")
        div.login-form
            div
                h3 Вход
                | !{login}
                | !{password}
            div
                | !{button}
                a(class="link" href=link) #{linkText}
`;