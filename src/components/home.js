import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
import Artistlist from './artistlist';

class Home extends Component { 

    state = {
        artists:[]
    }

    componentWillMount() {
        axios.get("http://localhost:3004/artists")
        .then(response =>{
           this.setState({
               artists:response.data
           })
        })
    }


    getKeywords = (event) => {
        let key = event.target.value;

        console.log(key)
    }

    render(){
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.state.artists}/>
            </div>
        )
    }
    
}

export default Home;