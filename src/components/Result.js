import React from 'react';
// import allReducers from '../reducers';

function Result(props) {
   const {movie} = props;
    return (
        <div className="result"  style={{flexDirection:"column"}}>
            <img src={movie.Poster} alt="pic is not available"/>
            <h3>{movie.Title} <br/>({movie.Year})<p style={{color:'red'}}>{movie.Type}</p></h3>
           
            {/* {console.log(allReducers.search)} */}
        </div>
    );
}

export default Result;