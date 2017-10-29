import {createStore , applyMiddleware , combineReducers} from "redux"
import Reducer from "../Store/Reducers/PatientReducer"
import thunk from "redux-thunk"

var midware = applyMiddleware(thunk)
var combine = combineReducers({
    Reducer
})

let Store = createStore(combine , midware)

Store.subscribe(()=>{
    console.log("Store State" , Store.getState())
})

export default Store