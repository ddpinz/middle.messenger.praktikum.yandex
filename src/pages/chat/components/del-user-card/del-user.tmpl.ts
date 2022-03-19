export default `
form
    div.modal-body
        div.modal-title Удалить пользователя
        | !{inputId}
    div.modal-buttons
        | !{delButton}
        | !{cancelButton}
`;