import {SEARCH_MOVIE , FETCH_MOVIES} from './types';
import axios from 'axios';


export const searchMovie = text => dispatch => {
    dispatch({
        type:SEARCH_MOVIE,
        payload: text
    });
};


export const fetchMoveies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=19e2fa5a&s=${text}`)
        .then(response => dispatch({
            type:FETCH_MOVIES,
            payload:response.data.Search
        })
        )
        // .then(response => 
        //     {if(response.data.Search !== undefined)
        //         console.log(response.data.Search)
        //      else
        //         console.log("movie not found")
        //     }

        //     )
        .catch(err => console.log(err));
    
}
