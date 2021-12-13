import axios from "axios";



export const getKey = () => {
    return axios.get(`https://front-test.beta.aviasales.ru/search`)
        .then(response=> {
            return response.data
        })
}

export const getTicket = (searchId) => {
    return axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
        .then(response => {
        return response.data
    })
}