import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getMessages } from './actions'


class App extends Component {

  componentWillMount(){
    this.props.dispatch(getMessages())
  }

  renderList = ({list}) => {
    if(list){
      return list.map((item)=>{
        return(
          <div key={item.id} className="item-list">
              <div className="title">{item.title}</div>
              <div className="sender">Message from:<span>{item.from}</span></div>
              <div className="body">{item.message}</div>
          </div>
        )
      })
    }
  }

  render() {
    return (
        <div className="App">
          <div className="top">
            <h3>Messages</h3>
            <Link to="/form">Add</Link>
          </div>
          <div className="messages_container">
            {this.renderList(this.props.messages)}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      messages:state.messages
  }
}


export default connect(mapStateToProps)(App)