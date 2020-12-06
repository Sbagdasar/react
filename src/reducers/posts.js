export default (state = [] , action) => {

    switch (action.type) {
        case  "ADD_LIST" : {
            return [...action.data]
        }

        case  "REMOVE_POST" : {
            return [...state.filter((item)=> item.id!=action.id ? true : false)];
        }

        default : {
            return  state
        }
    }
}