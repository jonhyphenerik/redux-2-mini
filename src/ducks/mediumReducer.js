import axios from 'axios'
const initialState = {
    loading: false, 
    articles: []
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export const requestArticles = () => {
    let articles = axios('/api/medium').then( res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function (state = initialState, action){
    const {type, payload} = action;
    switch(type) {
        case REQUEST_ARTICLES:
            return {...state, articles: payload}
            case REQUEST_ARTICLES+'_PENDING':
                return {...state, loading: true}
            case REQUEST_ARTICLES+'_FULFILLED':
                return {...state, loading: false, articles: payload}
            case REQUEST_ARTICLES+'_REJECTED':
                return {...state, loading: false}
            default:
                return state
    }
}