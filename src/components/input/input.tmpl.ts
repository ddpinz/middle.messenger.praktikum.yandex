export default `
div(class="input-form")
        label(for=name) #{title}
        input(
                type=type
                name=name
                placeholder=placeholder
                required=required
                value=inputValue
                minlength=minlength
                maxlength=maxlength
                pattern=pattern
        )
        div(class="input-form__error") #{errorMessage}
`;
