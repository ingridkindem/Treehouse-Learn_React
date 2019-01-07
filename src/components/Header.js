import React from 'react';
import Stats from './Stats';

//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX
const Header = (props) => {
    return (
        <header>
            <Stats players={props.players} />
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;