export default `
div.chat-content__chat__head__actions__wrapper
    | !{addUserModal}
    | !{removeUserModal}
    div.chat-content__chat__head__actions
    div.chat-tooltip(id="dropdown__content")
        div.chat-tooltip__list
            | !{addButton}
            | !{removeButton}
            | !{trashButton}
`;