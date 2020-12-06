import {combineReducers} from "redux"
import message from "./message";
import posts from "./posts";
import login from "./login";
import modal from "./modal";

const reducers = combineReducers({
    message:message,
    posts:posts,
    modal:modal,
    login:login,
})

export {reducers}