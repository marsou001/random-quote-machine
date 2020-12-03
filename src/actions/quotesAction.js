import { FETCH_QUOTES, GET_QUOTE } from './types';

export const fetchQuotes = function() {
    return function(dispatch) {
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(quotes => {            
            dispatch({
                type: FETCH_QUOTES,
                payload: quotes
            });
        })
        .catch(err => console.error(err, err.data));
    }
}       

export const getQuote = function() {
    return function(dispatch) {
        dispatch({
            type: GET_QUOTE,
            payload: null
        });
    }
}

