import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "./less/style.less";
import App from "Comp/app";
import {reducers} from "./reducers/index";

const storeApp = createStore(reducers);

render(<Provider store={storeApp}>
        <App />
    </Provider>

,document.getElementById("app"));

/*
let k = 0;

function update(store,action){
    switch (action.type) {
        case "PLUS" : {
            return store+action.data;
        }

        case "MINUS" : {
            return store-action.data;
        }

        default : {
            return store;
        }
    }
}


class Store {

    let #info;
    //store - начальные данные храниллища
    //fn -редуктор (функция, которая будет менять хранилище)
    constructor(store,fn){
        this._store = store;
        this._update = fn; //reducer
        this._callbacks = [];
    }

    update(data){
        this._store = this._update(this._store,data)
        this._callbacks.forEach((fn)=>{
            fn(this._store, data);
        })
    }

    get info() {
        return this._store;
    }

    subscribe(fn) {
        this._callbacks.push(fn);
    }
}

let redux = new Store(0,update);
    redux.subscribe((store, data)=>{
        console.log(`action ${data.type}  values  ${data.data}`)
    })

    redux.subscribe((store, data)=>{
        console.log(`store info  : ${store}`)
    })


    redux.update({
        type: "PLUS",
        data :  15
    })

    redux.update({
        type: "MINUS",
        data :  5
    })

    redux.update({
        type: "22123123",
        data :  5
    })


*/