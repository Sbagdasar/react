import {action as reduxAction} from "Action/action";

export default (state = {
    logOk: false,
} , action) => {

    switch (action.type) {
        case  reduxAction.login.LOGIN_OK: {
            localStorage.setItem('userName', "admin")

            return Object.assign({},{
                logOk : true,
            })

        }

        case  reduxAction.login.LOGIN_ERROR : {
            localStorage.clear()
            return Object.assign({},{
                logOk: false,
            })
        }

        default : {
            return  state
        }
    }
}