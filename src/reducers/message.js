import {action as reduxAction} from "Action/action";

export default (state = {
    active: false,
    text : null
} , action) => {

    switch (action.type) {
        case  reduxAction.message.SHOW_MESSAGE : {
            return Object.assign({},{
                active: true,
                text : action.text,
            })
        }

        case  reduxAction.message.HIDE_MESSAGE : {
            return Object.assign({},{
                active: false,
                text : null,
            })
        }

        default : {
            return  state
        }
    }
}