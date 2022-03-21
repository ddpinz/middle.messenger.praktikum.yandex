export default `
form
    div.modal-body
        div.modal-title Добавить пользователя
        | !{inputId}
    div.modal-buttons
        | !{addButton}
        | !{cancelButton}
`;