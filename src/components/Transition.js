import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component{

    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show ? true:false 
        })
    }


    render(){
        return(
            <div>
                <Transition
                    in={this.state.show}
                    timeout={{
                        enter:2000,
                        exit:2000
                    }}

                    enter={true}
                    exit={true}

                    onEnter={ (node) =>{
                        console.log('Enter')
                    }}

                    onExit={ (node) =>{
                        console.log('Exited')
                    }}
                >
                  { state => 
                    <div className={`square square-${state}`}>
                        { `square square-${state}` }
                    </div>
                    }
                </Transition>
                <div className="showDiv" 
                    onClick={this.showDiv}>
                    Show or hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;