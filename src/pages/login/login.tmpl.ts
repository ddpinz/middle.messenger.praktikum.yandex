export default `
div.layout
    form(action="")
        div.login-form
            div
                h3 Вход
                | !{login}
                | !{password}
                if loginError
                    div.login-error=loginError
            div
                | !{button}
                | !{link} 
`;