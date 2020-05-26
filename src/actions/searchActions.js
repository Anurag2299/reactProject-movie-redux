import {SEARCH_MOVIE , FETCH_MOVIES} from './types';
import axios from 'axios';


export const searchMovie = text => dispatch => {
    dispatch({
        type:SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMoveies = text => dispatch => {
    const temp =axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=19e2fa5a&s=${text}`)
        .then(response => dispatch({
            type:FETCH_MOVIES,
            payload:response.data.Search,
            
        })
        )
        .catch(err => console.log(err));
        console.log(temp)    
}

// export const fetchMoveies = text => {
//     const temp =axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=19e2fa5a&s=${text}`)
//         .then((response) => {
//             type:FETCH_MOVIES,
//             payload:response.data.Search,}
//         )
//         .catch(err => console.log(err));
//         console.log(temp)    
// }