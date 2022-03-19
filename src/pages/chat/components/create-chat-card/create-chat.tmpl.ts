export default `
form
    div.modal-body
        div.modal-title Название чата
        | !{inputId}
    div.modal-buttons
        | !{addButton}
        | !{cancelButton}
`;