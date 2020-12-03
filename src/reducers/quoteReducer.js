import { FETCH_QUOTES, GET_QUOTE } from '../actions/types';
import colors from '../colors';

const initialState = {
    colors: [...colors],
    quotes: [
        {
            text: '',
            author: ''
        }
    ],
    color: 0,
    quote: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_QUOTES:            
            const COLOR1 = parseInt(Math.random() * state.colors.length);
            // document.getElementsByTagName("html")[0].style.setProperty("--rand-color", COLOR1)
            return {
                ...state,
                quotes: [...action.payload],
                color: COLOR1,
                quote: parseInt(Math.random() * action.payload.length)
            }
        case GET_QUOTE:
            const COLOR2 = parseInt(Math.random() * state.colors.length);
            console.log(COLOR2)
            // document.getElementsByTagName("html")[0].style.setProperty("--rand-color", COLOR2)
            return {
                ...state,
                color: COLOR2,
                quote: parseInt(Math.random() * state.quotes.length)
            }
        default:
            return state;
    }
}