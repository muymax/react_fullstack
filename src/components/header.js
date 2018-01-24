import React from 'react';
import classes from '../css/styles.css'

const Header = (props) =>{
        return ( 
            <header>
                <div className={classes.logo}>Logo</div>
                <input 
                    type="text" 
                    onChange={props.keywords}
                />
            </header>
        )
}


export default Header;