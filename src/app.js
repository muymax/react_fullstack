import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovies,getGames,getCelebrities} from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getMovies())
    this.props.dispatch(getGames())
    this.props.dispatch(getCelebrities())
  }
      

  renderData = (data) =>{
    if(data){
      return data.map((item)=>{
        return(
          <li key={item.id}>{item.name}</li>
        )
      })
    }
  }


  render() {
    return (
     <div>
        <div className="movies">
          <h2>Movies</h2>
          <ul>
            {this.renderData(this.props.data.movies)}
          </ul>
        </div>
        <div className="games">
          <h2>Games</h2>
          <ul>
            {this.renderData(this.props.data.games)}
          </ul>
        </div>
        <div className="Celebrities">
          <h2>Celebrities</h2>
          <ul>
            {this.renderData(this.props.data.celebrities)}
          </ul>
        </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {data: state.data}
}

export default connect(mapStateToProps)(App)