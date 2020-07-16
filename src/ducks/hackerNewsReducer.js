import axios from 'axios'

const initialState = {
    loading: false,
    articles: []
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
const REQUEST_ARTICLES_PENDING = 'REQUEST_ARTICLES_PENDING'
const REQUEST_ARTICLES_FULFILLED = 'REQUEST_ARTICLES_FULFILLED'
const REQUEST_ARTICLES_REJECTED = 'REQUEST_ARTICLES_REJECTED'

// Action Creators
export const requestArticles = () => {
    let articles=axios('/api/hacker-news').then( res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function hackerNewsReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case REQUEST_ARTICLES:
            return {...state, articles: payload}
        case REQUEST_ARTICLES_PENDING:
            return {...state, loading: true}
        case REQUEST_ARTICLES_FULFILLED:
            return {...state, loading: false, articles: payload}
        case REQUEST_ARTICLES_REJECTED:
            return {...state, articles: payload}        
        default:
            return state;
    }
}