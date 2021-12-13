import {combineReducers} from "redux";
import {createStore} from "redux";
import {TicketReducer} from "./Ticket-reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
    TicketReducer
})

const store = createStore(reducer,applyMiddleware(thunk))

window.store = store

export default store