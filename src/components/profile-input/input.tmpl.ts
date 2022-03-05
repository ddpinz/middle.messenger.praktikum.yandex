export default `
div.profile-form__line
    div.profile-form__line_title=title
    div.profile-form__line_value
        input.profile-form__line_input(
            type=type
            name=name
            placeholder=placeholder
            required=required
            value=input_value
            minlength=minlength
            maxlength=maxlength
            pattern=pattern
    )
`;
