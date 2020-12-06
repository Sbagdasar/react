import {action as reduxAction} from "Action/action";

export default (state = {
    active: false,
    content : null
} , action) => {

    switch (action.type) {
        case  reduxAction.modal.SHOW_MODAL: {
            return Object.assign({},{
                active: true,
                content : action.content,
                fnOk : action.fnOk,
                fnCancel : action.fnCancel,
                buttons : action.buttons
            })
        }

        case  reduxAction.modal.HIDE_MODAL : {
            return Object.assign({},{
                active: false,
                content : null,
            })
        }

        default : {
            return  state
        }
    }
}