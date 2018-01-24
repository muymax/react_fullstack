import React from 'react';

const Conditional = () => {

    //const value = false;

    const returnValue = () => {
        /////
        return true
    }

    const showIt = () => {
        return ( returnValue() ?
            <div>
                Hello, it's true
            </div> 
            :
            <div>
                Hello, it's false
            </div>
        )
    }

    return (
        <div>
            { showIt()}
        </div>
    )
}

export default Conditional;