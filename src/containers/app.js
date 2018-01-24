import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist,directorslist } from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList';

class App extends Component {

    componentWillMount(){
        this.props.movieslist();
        this.props.directorslist();
    }

    render(){
        return(
            <div>
                <MoviesList {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        movieslist,
        directorslist
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);