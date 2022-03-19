export default `
div.layout
    form(action="")
        div.login-form
            div
                h3 Регистрация
                | !{email}
                | !{login}
                | !{name}
                | !{lastName}
                | !{phone}
                | !{password}
                | !{retypePassword}
            div
                | !{button}
                | !{link} 
`;