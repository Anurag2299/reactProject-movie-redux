import React  from 'react';
import {searchMovie, fetchMoveies } from '../actions/searchActions'
import {connect} from 'react-redux'


function Search(props) {
  
   const onChange = e =>{
      props.searchMovie(e.target.value);
   }  
  
   const onKeyPress = e =>{
     props.fetchMoveies(props.text);
   }
    return ( 
      <>
      <section className="searchbox-wrap">
     <input 
     type="text" 
     placeholder="Search for a movie.." 
     className="searchbox"
     onChange={onChange} />
      <div style={{padding:'20px'}}><button className="Search" onClick={onKeyPress}>Search</button></div>
     </section>
        
     
   </>
    );
}

const mapStatesTOProps = state =>({
  text: state.moviez.text
})



export default connect(mapStatesTOProps,{searchMovie,fetchMoveies})
(Search);


