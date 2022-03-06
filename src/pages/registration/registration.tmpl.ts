export default `
div.layout
    form(action="")
        div.login-form
            div
                h3 #{linkText}
                | !{email}
                | !{login}
                | !{name}
                | !{lastName}
                | !{phone}
                | !{password}
                | !{retypePassword}
            div
                | !{button}
                a(class="link" href=link) #{linkText}
`;