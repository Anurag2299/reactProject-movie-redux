import React ,{Component}from 'react';
import Result from './Result'; 
import {connect} from 'react-redux';

class Results extends Component {

    
    render() {
    const {movies} = this.props;
    let content='';
    
    content = movies.length > 0 ? movies.map((movie) =>
        <Result key={movie.imdbID} movie={movie} />) : [] ;
        return (
            <div className="results">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.moviez.movies
})

export default connect(mapStateToProps)(Results);