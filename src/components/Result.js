import React from 'react';
import allReducers from '../reducers';

function Result(props) {
   const {movie} = props;
    return (
        <div className="result"  style={{flexDirection:"column"}}>
            <img src={movie.Poster} alt="Image is not available"/>
           <p> <h3>{movie.Title} <br/>({movie.Year})<p style={{color:'red'}}>{movie.Type}</p></h3></p>
           
            {/* {console.log(allReducers.search)} */}
        </div>
    );
}

export default Result;