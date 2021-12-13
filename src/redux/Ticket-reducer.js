import {getKey, getTicket} from "../Api/Api";

const GET_TICKETS = 'GET_TICKETS';
const SORT_TICKETS_PRICE = 'SORT_TICKETS';
const SORT_TICKETS_QUICK = 'SORT_TICKETS_QUICK';
const STORT_BY_KEY = 'STORT_BY_KEY';

const initialState = {
    tickets: [],
    stop: null,
    keyArr: ['all']
}

export const TicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS:
            return {
                ...state,
                tickets: action.ticketsArr.tickets,
                stop: action.ticketsArr.stop
            }
        case SORT_TICKETS_PRICE:
            return {...state, tickets: action.price}
        case SORT_TICKETS_QUICK:
            return {...state, tickets: action.duration}
        case STORT_BY_KEY:
            let arr = [...state.keyArr]

            if (action.value === 'all') {
                arr = [action.value]
            } else if (arr.includes(action.value)) {
                arr = arr.filter(item => item !== action.value)
                if (!arr.length) arr = ['all']
            } else {
                arr = [...arr.filter(item => item !== 'all'), action.value]
            }

            return {...state, keyArr: arr}
        default:
            return state
    }
}

export const getKeyAC = () => {
    return (dispatch) => {
        getKey().then(data => {
            dispatch(getTicketThunkAC(data.searchId))
        })
    }
}

export const getTicketThunkAC = (userId) => {
    return (dispatch) => {
        getTicket(userId).then(data => {
            dispatch(getTicketsAC(data))
        })
    }
}

export const getTicketsAC = (ticketsArr) => {
    return {
        type: GET_TICKETS,
        ticketsArr
    }
}

export const sortArrAC = (price) => {
    return {
        type: SORT_TICKETS_PRICE,
        price
    }
}

export const sortArrQuickAC = (duration) => {
    return {
        type: SORT_TICKETS_QUICK,
        duration
    }
}

export const getValueKeyAC = (value) => {
    console.log('val:', value)
    return {
        type: STORT_BY_KEY,
        value
    }
}



